import React, { useEffect, useState } from "react";
import abs from "../assets/images/abs.png";
import back from "../assets/images/back.png";
import chest from "../assets/images/chest.png";
import cardio from "../assets/images/cardio.png";
import legs from "../assets/images/legs.png";
import ohpress from "../assets/images/ohpress.png";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import { Box, TextField, Button } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <div className=" marquee">
      <div className="card-group track">
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia component="img" height="140" image={abs} alt="Abs" />
            <CardContent>
              <Typography>Abs</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={chest}
              alt="Push-up"
            />
            <CardContent>
              <Typography>Chest</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={back}
              alt="Deadlift"
            />
            <CardContent>
              <Typography>Back</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={legs}
              alt="Squatting"
            />
            <CardContent>
              <Typography>Legs</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={cardio}
              alt="Battle Ropes"
            />
            <CardContent variant="h5" component="div">
              <Typography>Cardio</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={ohpress}
              alt="Overhead Press"
            />
            <CardContent>
              <Typography>Shoulders</Typography>
            </CardContent>
          </Card>
        </div>

        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={abs}
              alt="Overhead Press"
            />
            <CardContent>
              <Typography>Abs</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={chest}
              alt="Overhead Press"
            />
            <CardContent>
              <Typography>Chest</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={back}
              alt="Overhead Press"
            />
            <CardContent>
              <Typography>Back</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={legs}
              alt="Overhead Press"
            />
            <CardContent>
              <Typography>Legs</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={cardio}
              alt="Push-up"
            />
            <CardContent>
              <Typography>Cardio</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={ohpress}
              alt="Push-up"
            />
            <CardContent>
              <Typography>Shoulders</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia component="img" height="140" image={abs} alt="Push-up" />
            <CardContent>
              <Typography>Abs</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={chest}
              alt="Push-up"
            />
            <CardContent>
              <Typography>Chest</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={back}
              alt="Push-up"
            />
            <CardContent>
              <Typography>Back</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={legs}
              alt="Push-up"
            />
            <CardContent>
              <Typography>Legs</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={cardio}
              alt="Push-up"
            />
            <CardContent>
              <Typography>Cardio</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="slide">
          <Card className="marquee-card">
            <CardMedia
              component="img"
              height="140"
              image={ohpress}
              alt="Push-up"
            />
            <CardContent>
              <Typography>Shoulders</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <Box
        alignContent="center"
        justifyContent="center"
        postition="relative"
        mt="40px"
        paddingBottom="10px"
        textAlign="center"
      >
        <TextField
          height="56px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "400px", xs: "200px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          placeholder="Search Exercises"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          className="nav-link"
          color="primary"
          variant="contained"
          sx={{
            color: "#fff",
            textTransform: "none",
            width: { lg: "150px", xs: "70px" },
            height: "56px",
            position: "absolute",
            marginLeft: "10px",

            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </div>
  );
};

export default SearchExercises;
