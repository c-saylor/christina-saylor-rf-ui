import summitLogo from '../assets/icons/summit-logo.svg';

export default function EventHeader() {
  return (
    <div className="Event-header">
      <div className="Event-header-left">
        <img src={summitLogo} alt="" />
        <div className="Event-header-text">
          <h1>RainFocus Summit</h1>
          <p>December 15th</p>
          <p>Lehi, Utah</p>
        </div>
      </div>
      <div className="Event-header-right">
        {/* TO-DO - open the edit event flow */}
        <button type="button">Edit event</button>
      </div>
    </div>
  );
}
