var sourceData159 = {"FileName":"/Users/asimms/Desktop/Programming/mhkit_matlab_simms_dev/MHKiT-MATLAB/mhkit/wave/graphics/plot_elevation_timeseries.m","RawFileContents":["function figure=plot_elevation_timeseries(wave_elevation, options)","","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","%     Plots wave elevation timeseries","%","% Parameters","% ------------","%     wave_elevation: Structure of the following form:","%","%         wave_elevation.elevation: elevation [m]","%","%         wave_elevation.time: time (s);","%","%     title: string (optional)","%         title for the plot","%         to call: plot_elevation_timeseries(wave_elevation,\"title\",title)","%","%     savepath: string (optional)","%         path and filename to save figure.","%         to call: plot_elevation_timeseries(wave_elevation,\"savepath\",savepath)","%","% Returns","% ---------","%     figure: figure","%         Plot of wave elevation vs. time","%","%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%","","arguments","    wave_elevation","    options.title = \"\";","    options.savepath = \"\";","end","","figure=plot(wave_elevation.time,wave_elevation.elevation);","xlabel('Time (s)')","ylabel('Wave Elevation (m)')","","title(options.title)","","len = strlength(options.savepath);","if len > 1","    saveas(figure, options.savepath);","end","",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":66,"ContinuedLine":false},"Statement":[{"LineNumber":31,"Hits":1,"StartColumnNumbers":20,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":32,"Hits":0,"StartColumnNumbers":23,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":35,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":36,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":37,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":39,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":41,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":42,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":43,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":37,"ContinuedLine":false}]}}