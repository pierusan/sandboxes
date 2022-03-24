import { useState } from "react";
// Utilities
import { Typography, Box } from "@mui/material";
// Reset
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// Update themes
import {
  styled,
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
// Color shades
import { purple } from "@mui/material/colors";

// To show how to override with regular css stylesheets
import "./Mui.css";

// CONSTANTS
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "hsl(160deg 100% 70%)",
    },
  },
});
const customTheme = createTheme({
  palette: {
    primary: {
      main: purple[300],
    },
    secondary: {
      main: purple[100],
    },
    text: {
      primary: "hsl(160deg 100% 70%)",
      disabled: "yellow",
    },
  },
  typography: {
    htmlFontSize: 20,
  },
});
const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];

// STYLES
const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 0;

  /* Can access theme and override specific components (i.e. {Typography}
  instead of just h2), but we need to include @emotion/babel-plugin */
  & > h2 {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const MyButton = styled(Button)`
  background-color: pink;
  &:hover {
    background-color: red;
  }
`;

const MuiExample = () => {
  const [someValue, setSomeValue] = useState("10");

  return (
    // injectFirst will ensure the MUI styles are added to the HTML head
    // first, so that the other imported rules from CSS modules have lower
    <StyledEngineProvider injectFirst>
      <MainContainer>
        {/* Styled via the container above */}
        <Typography variant="h2">MUI Example</Typography>
        {/* No pollution here. Roboto will be applied to The Typography only */}
        <Typography
          variant="body2"
          classes={{ root: "myOwnClass" }}
          className="myOwnClass2"
        >
          Some small body element with margin bottom added as a prop (mb is )
        </Typography>
        <Button variant="contained">Classic Button - Light</Button>
        <label htmlFor="ir">
          Native range input
          <input
            type="range"
            id="ir"
            value={someValue}
            onChange={(ev) => {
              setSomeValue(ev.target.value);
            }}
          />
        </label>
        {/* Override the theme object which is passed to all the components (with
        emotion) */}

        <ThemeProvider theme={darkTheme}>
          {/* Add a reset, background, color for the elements inside. enableColorScheme
                sets the colors of native components */}
          <ScopedCssBaseline enableColorScheme>
            <Box
              padding="16px"
              display="flex"
              gap="16px"
              flexDirection="column"
              alignItems="center"
            >
              <p style={{ maxWidth: "60ch" }}>
                This Box component uses a <i>ScopedCssBaseline</i>, which resets
                some properties based on the current theme (here a ThemeProvider
                with dark mode and a teal text color). Example of props changed:
                text color (teal), background color (black because dark mode),
                font family (Roboto), box-sizing, and margin reset.
              </p>
              <Button variant="contained">Classic Button - Dark</Button>
              <label htmlFor="ir">
                Native range input
                <input
                  type="range"
                  id="ir"
                  value={someValue}
                  onChange={(ev) => {
                    setSomeValue(ev.target.value);
                  }}
                />
              </label>
            </Box>
          </ScopedCssBaseline>
        </ThemeProvider>
        <Box
          padding="16px"
          display="flex"
          gap="16px"
          flexDirection="column"
          alignItems="center"
          bgcolor="rgba(255,255,255,0.2)"
        >
          <ThemeProvider theme={customTheme}>
            <p style={{ maxWidth: "60ch" }}>
              This Box component does <i>not</i> use a ScopedCssBaseline but is
              wrapped in a ThemeProvider (so it still uses Inter as its font)
            </p>
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              value="Overriden theme disabled text color"
            />
            <Button variant="contained">Button - Custom Theme</Button>
            <Button variant="contained" color="secondary">
              Button - Custom Theme Secondary
            </Button>
            <Button variant="contained" disabled>
              Button - Custom Theme (disabled)
            </Button>
          </ThemeProvider>
          <MyButton variant="contained">Overriden Button (styled)</MyButton>
          <Button variant="contained" className="MyButton2">
            Overriden Button (CSS)
          </Button>
        </Box>
        <Typography paragraph variant="h3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          molestiae velit dolor, hic excepturi, qui eligendi doloribus quas
          similique dolores aperiam quidem minus vero praesentium ab sint?
          Libero, illum perferendis!
        </Typography>
        <Box bgcolor="white" minWidth="500px">
          <Autocomplete
            fullWidth={false}
            multiple
            id="tags-standard"
            options={topFilms}
            getOptionLabel={(option: { title: string; year: number }) =>
              option.title
            }
            defaultValue={[topFilms[1]]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Multiple values"
                placeholder="Favorites"
              />
            )}
          />
        </Box>
      </MainContainer>
    </StyledEngineProvider>
  );
};

export { MuiExample };
