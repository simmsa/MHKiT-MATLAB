function results = check_range(data, bound, options)

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%   Check for data that is outside expected range
%
% Parameters
% ------------
%
%     data: pandas dataframe or qcdata structure
%          Pandas dataframe indexed by datetime (use
%          py.mhkit_python_utils.pandas_dataframe.timeseries_to_pandas(ts,time,x))
%
%          OR
%
%          qcdata structure of form:
%
%             data.values: 2D array of doubles with arbitrary number of columns
%
%             data.time:   1D array of datetimes or posix times
%
%     bound: cell array of floats
%         [lower bound, upper bound] for range checking
%         NaN or py.None can be used for either bound
%
%     key: string (optional)
%         Data column name or translation dictionary key.  If not specified
%         or set to py.None, all columns are used for test.
%         to call: check_range(data,bound,"key",key)
%
%     min_failures: int (optional)
%         Minimum number of consecutive failures required for reporting
%         default = 1
%         to call: check_range(data,bound,"min_failures",min_failures)
%
%
% Returns
% ---------
%     results: qcdata structure of form:
%
%         results.values: array of doubles
%            Same shape as input data.values
%            Elements that failed QC test replaced with NaN
%
%         results.mask: array of int64
%            Same shape as input data.values
%            Logical mask of QC results (1 = passed, 0 = failed QC test)
%
%         results.time: array of datetimes
%            Same as input times
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

arguments
    data
    bound
    options.key = py.None;
    options.min_failures = 1;
end

  py.importlib.import_module('pecos');

  % check to see if a pandas dataframe or not
  if (isa(data,'py.pandas.core.frame.DataFrame')~=1)
    data=qc_data_to_dataframe(data);
  end
bound = py.list(bound);

r = struct(py.pecos.monitoring.check_range(data,bound,pyargs("key",options.key,...
    "min_failures",int32(options.min_failures))));
  % Convert to qcdata structure
  results.values=double(r.cleaned_data.values);
  results.mask=int64(r.mask.values);

  % Extract time from index, convert to posix then datetime
  ptime = double(py.array.array('d',py.numpy.nditer(r.cleaned_data.index.values)))/1e9;
  results.time=datetime(ptime,'ConvertFrom','posix');

end

