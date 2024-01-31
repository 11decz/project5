import './assets/fonts/fonts.css'; 
import './assets/globals.css'; 

function MyApp({ Component, pageProps }) {
 
  const customStyles = {
    fontFamily: 'Prompt',
    
  };

  return (
    <div style={customStyles}>
      <Component {...pageProps} />
    </div>
    // <BrowserRouter>
    // <Route>
    // <Route path="/bestdrama/" >
    //   <bestdrama/>
    // </Route>
    //     <Route path="/bestmovies/" element={<bestmovies  />} />
    // </Route>
    // </BrowserRouter>
  );
}

export default MyApp;