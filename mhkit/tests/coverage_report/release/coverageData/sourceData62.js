var sourceData62 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB-2/mhkit/qc/check_corrupt.m","RawFileContents":["function results = check_corrupt(data,vals,options)","","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","%   Check for data that is outside expected range","%","% Parameters","% ------------","%","%     data: pandas dataframe or qcdata structure","%          Pandas dataframe indexed by datetime (use","%          py.mhkit_python_utils.pandas_dataframe.timeseries_to_pandas(ts,time,x))","%","%          OR","%","%          qcdata structure of form:","%","%             data.values: 2D array of doubles with arbitrary number of columns","%","%             data.time:   1D array of datetimes or posix times","%","%     vals: cell array of floats","%         Array of at least two corrupt data values","%         Use cell array for one value, or pack array with NaN","%         (A single value array becomes a non-iterable scalar in python and","%         will cause an error.)","%","%     key: string (optional)","%         Data column name or translation dictionary key.  If not specified","%         or set to py.None, all columns are used for test.","%         to call: check_corrupt(data,vals,\"key\",key)","%","%     min_failures: int (optional)","%         Minimum number of consecutive failures required for reporting","%         default = 1","%         to call: check_corrupt(data,vals,\"min_failures\",min_failures)","%","%","% Returns","% ---------","%     results: qcdata structure of form:","%","%         results.values: array of doubles","%            Same shape as input data.values","%            Elements that failed QC test replaced with NaN","%","%         results.mask: array of int64","%            Same shape as input data.values","%            Logical mask of QC results (1 = passed, 0 = failed QC test)","%","%         results.time: array of datetimes","%            Same as input times","%","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","","arguments","    data","    vals","    options.key = py.None;","    options.min_failures = 1;","end","","  py.importlib.import_module('pecos');","","  % check to see if a pandas dataframe or not","  if (isa(data,'py.pandas.core.frame.DataFrame')~=1)","    data=qc_data_to_dataframe(data);","  end","  vals = py.list(vals);","","r = struct(py.pecos.monitoring.check_corrupt(data,vals,pyargs(\"key\",options.key,...","    \"min_failures\",int32(options.min_failures))));","  % Convert to qcdata structure","  results.values=double(r.cleaned_data.values);","  results.mask=int64(r.mask.values);","","  % Extract time from index, convert to posix then datetime","  ptime = double(py.array.array('d',py.numpy.nditer(r.cleaned_data.index.values)))/1e9;","  results.time=datetime(ptime,'ConvertFrom','posix');","end","",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false},"Statement":[{"LineNumber":58,"Hits":1,"StartColumnNumbers":18,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":59,"Hits":1,"StartColumnNumbers":27,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":62,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":65,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":66,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":68,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":70,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":79,"ContinuedLine":false},{"LineNumber":71,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":50,"ContinuedLine":true},{"LineNumber":73,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":74,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":77,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":87,"ContinuedLine":false},{"LineNumber":78,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":53,"ContinuedLine":false}]}}