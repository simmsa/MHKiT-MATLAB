var sourceData41 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB-2/mhkit/loads/general/bin_statistics.m","RawFileContents":["function bins=bin_statistics(data,bin_against,bin_edges, varargin)","","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","%   Bins calculated statistics against data signal (or channel)","%   according to IEC TS 62600-3:2020 ED1.","%","% Parameters","% ------------","%     data: Strucutre or Table with handles- data.data and data.time","%         data.data contains a vector or matrix containing time-series","%         statistics of variables","%","%     bin_against: vector","%         Data signal to bin data against (ie. current speed)","%","%     bin_edges: vector","%         Bin edges with consistent step size.","%","%     data_signal: cell array (optional)","%         List of data signal(s) to bin, default = all data signals","%","%","% Returns","% ---------","%     bins: structure","%","%","%         bins.averages = means of each bin","%","%         bins.std = standard deviation of each bin","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","","py.importlib.import_module('mhkit');","% py.importlib.import_module('numpy');","","","fn = fieldnames(data);","si = size(fn);","li=py.list();","li2 = py.list();",""," for k=1:length(fn)","","     if ~any(strcmp(fn{k} , {'time','Properties','Row','Variables'} ))","            eval(['temp = data.' fn{k} ';' ]);","            indlen = size(temp);","            app=py.list(temp);","            li=py.mhkit_python_utils.pandas_dataframe.lis(li,app);","            li2=py.mhkit_python_utils.pandas_dataframe.lis(li2,fn{k});","     end"," end","","ind = 1:1:indlen(1);","datapd=py.mhkit_python_utils.pandas_dataframe.spectra_to_pandas(ind,li,si(1),pyargs('cols',li2));","if nargin == 3","    stat_py = py.mhkit.loads.general.bin_statistics(datapd,py.numpy.array(bin_against),py.numpy.array(bin_edges));","elseif nargin == 4","    stat_py = py.mhkit.loads.general.bin_statistics(datapd,py.numpy.array(bin_against),py.numpy.array(bin_edges),pyargs('data_signal',py.list(varargin{1})));","","else","    ME = MException('MATLAB:bin_statistics','incorrect number of input arguments');","    throw(ME);","end","","averages = double(py.array.array('d',py.numpy.nditer(stat_py{1})));","std = double(py.array.array('d',py.numpy.nditer(stat_py{2})));","sha=cell(stat_py{1}.values.shape);","x=int64(sha{1,1});","y=int64(sha{1,2});","pointer = 1;","","for k=1:length(fn)","     if ~any(strcmp(fn{k} , {'time','Properties','Row','Variables'} ))","        if nargin == 4","            if any(strcmp(varargin{1},fn{k}))","            e = (pointer+x-1);","            val = averages(pointer:e)';","            eval(['bins.averages.' fn{k} '= val ;' ]);","            pointer = pointer +x ;","","            end","        end","        if nargin == 3","            e = (pointer+x-1);","            val = averages(pointer:e)' ;","            eval(['bins.averages.' fn{k} '= val ;' ]);","            pointer = pointer +x ;","","        end","     end","end"," pointer = 1;"," for k=1:length(fn)","     if ~any(strcmp(fn{k} , {'time','Properties','Row','Variables'} ))","        if nargin == 4","            if any(strcmp(varargin{1},fn{k}))","                e = (pointer+x-1);","                val = std(pointer:e)';","                eval(['bins.std.' fn{k} '= val ;' ]);","                pointer = pointer +x;","            end","        end","","        if nargin == 3","            e = (pointer+x-1);","            val = std(pointer:e)';","            eval(['bins.std.' fn{k} '= val ;' ]);","            pointer = pointer +x;","","        end","     end"," end","",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":66,"ContinuedLine":false},"Statement":[{"LineNumber":33,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":37,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":38,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":39,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":40,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":42,"Hits":1,"StartColumnNumbers":1,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":44,"Hits":21,"StartColumnNumbers":5,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":45,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":46,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":47,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":48,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":49,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":53,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":54,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":97,"ContinuedLine":false},{"LineNumber":55,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":56,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":114,"ContinuedLine":false},{"LineNumber":57,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":58,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":157,"ContinuedLine":false},{"LineNumber":61,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":83,"ContinuedLine":false},{"LineNumber":62,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":65,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":67,"ContinuedLine":false},{"LineNumber":66,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":62,"ContinuedLine":false},{"LineNumber":67,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":68,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":69,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":70,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":12,"ContinuedLine":false},{"LineNumber":72,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":73,"Hits":21,"StartColumnNumbers":5,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":74,"Hits":18,"StartColumnNumbers":8,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":75,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":76,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":77,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":78,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":79,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":83,"Hits":18,"StartColumnNumbers":8,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":84,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":85,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":86,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":87,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":92,"Hits":1,"StartColumnNumbers":1,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":93,"Hits":1,"StartColumnNumbers":1,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":94,"Hits":21,"StartColumnNumbers":5,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":95,"Hits":18,"StartColumnNumbers":8,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":96,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":97,"Hits":0,"StartColumnNumbers":16,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":98,"Hits":0,"StartColumnNumbers":16,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":99,"Hits":0,"StartColumnNumbers":16,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":100,"Hits":0,"StartColumnNumbers":16,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":104,"Hits":18,"StartColumnNumbers":8,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":105,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":106,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":107,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":108,"Hits":18,"StartColumnNumbers":12,"EndColumnNumbers":33,"ContinuedLine":false}]}}