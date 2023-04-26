import PropTypes from "prop-types";

function ScreenVeil(props) {
  const screenVeilStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#000000cc',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    opacity: props.showing ? '1' : '0',
    transition: 'opacity 200ms ease',
  }
  return (
    <div style={screenVeilStyle}></div>
  );
}

ScreenVeil.propTypes = {
  showing: PropTypes.bool,
}

export default ScreenVeil;