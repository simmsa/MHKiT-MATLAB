var sourceData111 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB-2/mhkit/tidal/graphics/plot_current_timeseries.m","RawFileContents":["function figure=plot_current_timeseries(data, principal_direction, ...","                                       options)","","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","%     Returns a plot of velocity from an array of direction and speed","%     data in the direction of the supplied principal_direction.","%","% Parameters","% ------------","%    data: structure","%","%      data.time: vector","%       days from January 0, 0000 in the proleptic ISO calendar","%","%      data.d: vector","%       time-series of directions [degrees]","%","%      data.s: vector","%       time-series of speeds [cm/s]","%","%    principal_direction: numeric","%        Direction to compute the velocity in [degrees]","%","%    title: string (optional)","%       title for the plot","%       to call: plot_current_timeseries(data,principal_direction,\"title\",title)","%","%    savepath: string (optional)","%       path and filename to save figure.","%       to call: plot_current_timeseries(data,principal_direction,\"savepath\",savepath)","%","% Returns","% ---------","%   figure: timeseries plot of current-speed velocity","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","","arguments","    data","    principal_direction","    options.title = \"\";","    options.savepath = \"\";","end","","% Rotate coordinate system by supplied principal_direction","principal_directions = data.d - principal_direction;","","% Calculate the velocity","velocities = data.s .* cos(pi/180*principal_directions);","","% converting epoc time to matlab datetime","time = datetime(data.time, 'convertfrom', 'posixtime', 'Format', 'MM/dd/yy HH:mm:ss.SSS');","","% Call on standard xy plotting","figure = plot(time, velocities);","hold on","datetick('x',2,'keeplimits');","","grid on;","%axis 'tight';","xlabel('Time [date]','FontSize',20);","ylabel('Velocity [\\itm/s\\rm]','FontSize',20);","","title(options.title)","","len = strlength(options.savepath);","if len > 1","    saveas(figure, options.savepath);","end","","hold off","",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":39,"EndColumnNumbers":47,"ContinuedLine":true}],"Statement":[{"LineNumber":40,"Hits":1,"StartColumnNumbers":20,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":41,"Hits":0,"StartColumnNumbers":23,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":45,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":48,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":56,"ContinuedLine":false},{"LineNumber":51,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":90,"ContinuedLine":false},{"LineNumber":54,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":55,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":8,"ContinuedLine":false},{"LineNumber":56,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":58,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":8,"ContinuedLine":false},{"LineNumber":60,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":61,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":63,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":65,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":66,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":67,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":70,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":9,"ContinuedLine":false}]}}