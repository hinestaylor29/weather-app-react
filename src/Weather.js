import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "October 12, 2020",
    description: "Sunny",
    humidity: "20%",
    wind: "10 km/h",
    imgUrl: "https://www.flaticon.com/free-icon/sun_169367"
  };

  return (
    <div>
      <div className="row">
        <form className="location-search col-12 form-group">
          <input
            className="search-bar col-6"
            type="text"
            placeholder="Try 'New York'..."
            autoFocus="off"
            autoComplete="off"
          />
          <input className="search-button col-2" type="submit" value="Search" />
          <input
            className="current-button col-2"
            type="submit"
            value="Current"
          />
        </form>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="float-right">
            <img src={weatherData.imgUrl} alt="" />
          </div>
        </div>

        <div className="col-6">
          <h1> 19 </h1>
          <h1> {weatherData.city} </h1>

          <h4>{weatherData.city}</h4>

          <h4> {weatherData.city} </h4>

          <span className="units">
            <a href="/" className="active">
              °C{" "}
            </a>{" "}
            |<a href="/">°F</a>
          </span>
          <p className="metadata"> {weatherData.humidity}</p>
          <p className="metadata"> {weatherData.wind}</p>
        </div>
      </div>
    </div>
  );
}