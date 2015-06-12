var Dropzone = require('../');
var React = require('../node_modules/react');

var DropzoneDemo = React.createClass({
    getInitialState: function () {
      return {
        files: []
      };
    },

    onDrop: function (files) {
      console.log('Received files: ', files);
      this.setState({
        files: files
      });
    },

    showFiles: function () {
      if (this.state.files.length <= 0) {
        return '';
      }

      var files = this.state.files;

      return (
        <div>
          <h3>Dropped files: </h3>
          <ul>
            {[].map.call(files, function (f, i) {
              return <li key={i}>{f.name + ' : ' + f.size + ' bytes.'}</li>;
            })}
          </ul>
        </div>
        );
    },

    render: function () {
      var styling = {
        padding: 30
      };

      return (
          <div>
            <Dropzone onDrop={this.onDrop} size={150} >
              <div style={styling}>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            {this.showFiles()}
          </div>
      );
    }
});

React.render(<DropzoneDemo />, document.body);

module.exports = DropzoneDemo;