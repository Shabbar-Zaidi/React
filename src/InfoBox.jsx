import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"; // Icon
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1715972898845-62dd6786fb58?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Image URL
  const HOT_URL =
    "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  //   let info = {   // Now info is passed as props from WeatherApp.jsx
  //     city: "Lahore",
  //     temp: 23,
  //     tempMin: 20,
  //     tempMax: 25,
  //     humidity: 50,
  //     feelsLike: 25,
  //     weather: "Cloudy",
  //   };
  return (
    <div className="InfoBox">
      <h2>Weather Info</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            // image={INIT_URL}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <Brightness7Icon/>
                : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              {/* component="span" is used to remove error and convert it itno span element */}
              <ul>
                <li>Temperature: {info.temp}&deg;C</li>
                <li>Min Temperature: {info.tempMin}°C</li>
                <li>Max Temperature: {info.tempMax}°C</li>
                <li>Humidity: {info.humidity}%</li>
                <li>Feels Like: {info.feelsLike}°C</li>
                <li>
                  The weather can be described as feels like{" "}
                  <i>{info.weather}</i>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
