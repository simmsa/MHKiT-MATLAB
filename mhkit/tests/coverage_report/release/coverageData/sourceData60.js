var sourceData60 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB/mhkit/power/quality/interharmonics.m","RawFileContents":["function interharmonics=interharmonics(harmonics,grid_freq)","","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","%   Calculates the interharmonics from the harmonics of current based on IEC 61000-4-7.","%","% Parameters","% -----------","%     harmonics: structure with handles- harmonics.amplitude and harmonics.harmonic","%         Harmonic amplitude with each timeseries in its own column","%","%     grid_freq: int","%         Value indicating if the power supply is 50 or 60 Hz. Options = 50 or 60","%","% Returns","% -------","%     interharmonics: structure with handles interharmonics.amplitude and","%           interharmonics.harmonic","%","%","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","","py.importlib.import_module('mhkit');","% py.importlib.import_module('numpy');","py.importlib.import_module('mhkit_python_utils');","","data = harmonics.amplitude;","","dsize=size(data);","li=py.list();","if dsize(2)>1","   for i = 1:dsize(2)","      app=py.list(data(:,i));","      li=py.mhkit_python_utils.pandas_dataframe.lis(li,app);","","   end","   data_pd=py.mhkit_python_utils.pandas_dataframe.spectra_to_pandas(harmonics.harmonic,li,int32(dsize(2)));","elseif dsize(2)==1","   data_pd=py.mhkit_python_utils.pandas_dataframe.spectra_to_pandas(harmonics.harmonic,py.numpy.array(data),int32(dsize(2)));","end","","interharmonics_pd = py.mhkit.power.quality.interharmonics(data_pd,grid_freq);","vals=double(py.array.array('d',py.numpy.nditer(interharmonics_pd.values)));","sha=cell(interharmonics_pd.values.shape);","x=int64(sha{1,1});","y=int64(sha{1,2});","vals=reshape(vals,[x,y]);","","","interharmonics.amplitude=vals;","interharmonics.harmonic = double(py.array.array('d',py.numpy.nditer(interharmonics_pd.index)));","",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":59,"ContinuedLine":false},"Statement":[{"LineNumber":22,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":24,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":26,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":28,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":30,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":31,"Hits":0,"StartColumnNumbers":3,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":32,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":33,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":36,"Hits":0,"StartColumnNumbers":3,"EndColumnNumbers":107,"ContinuedLine":false},{"LineNumber":37,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":38,"Hits":1,"StartColumnNumbers":3,"EndColumnNumbers":125,"ContinuedLine":false},{"LineNumber":41,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":77,"ContinuedLine":false},{"LineNumber":42,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":75,"ContinuedLine":false},{"LineNumber":43,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":44,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":45,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":46,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":49,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":50,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":95,"ContinuedLine":false}]}}