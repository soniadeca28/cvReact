import './App.css';
import './index.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import {useRef} from "react";
import '@progress/kendo-theme-material/dist/all.css';
import {PDFExport, savePDF} from '@progress/kendo-react-pdf';
import '@progress/kendo-drawing'

function App() {
    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);

    const handleExportWithMethod = () => {
        savePDF(contentArea.current, {paperSize: "A0"});
    };

  return (
      <div className="wrap-content">
          <PDFExport ref = {pdfExportComponent} paperSize = "A0">

              <div ref = {contentArea}>

                  <div className="container">
                      <Router>

                          <Route exact path="/" component={Home}/>


                      </Router>

                  <div className={"button-area"}>

                      <button onClick={handleExportWithMethod} className={"button"}>
                         Save
                      </button>

                      </div>

                  </div>
              </div>

          </PDFExport>

      </div>
  );
}

export default App;
