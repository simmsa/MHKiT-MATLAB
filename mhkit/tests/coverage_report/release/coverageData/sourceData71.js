var sourceData71 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB/mhkit/river/IO/delft_3d/delft_3d_calculate_unorm.m","RawFileContents":["function result = delft_3d_calculate_unorm(x, y, z)","","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","%","% Calculates the root mean squared value given three arrays.","%","% Parameters","% ------------","%    x: array","%        One input for the root mean squared calculation (e.g., x velocity).","%    y: array","%        One input for the root mean squared calculation (e.g., y velocity).","%    z: array","%        One input for the root mean squared calculation (e.g., z velocity).","%","% Returns","% ---------","%    result: array","%        The root mean squared of x, y, and z.","%","% Example","% -------","%    If the inputs are [1,2,3], [4,5,6], and [7,8,9], the code takes the","%    corresponding value from each array and calculates the root mean squared.","%    The resulting output is [8.1240384, 9.64365076, 11.22497216].","%","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","","    if ~isnumeric(x) || ~isnumeric(y) || ~isnumeric(z)","        error('MATLAB:delft_3d_calculate_unorm:InvalidInput', 'Inputs must be numeric arrays.');","    end","","    python_result = py.mhkit.river.io.d3d.unorm(py.numpy.array(x), py.numpy.array(y), py.numpy.array(z));","","    result = double(python_result);","end",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false},"Statement":[{"LineNumber":29,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":30,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":96,"ContinuedLine":false},{"LineNumber":33,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":105,"ContinuedLine":false},{"LineNumber":35,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":35,"ContinuedLine":false}]}}