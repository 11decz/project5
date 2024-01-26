import './fonts/fonts.css'; 
import './assets/globals.css'; 
function MyApp({ Component, pageProps }) {
 
  const customStyles = {
    fontFamily: 'Prompt',
    
  };

  return (
    <div style={customStyles}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;