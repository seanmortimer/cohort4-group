import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AdminDash() {
  const classes = useStyles();

  return (
    <div>
      <h1>Hey, Admin!</h1>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Please select start date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Please select end date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="button"
          // fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        // onClick={handleSubmit}
        // disabled={!errorMsg.isValid}
        >
          Start Query
            </Button>
      </form>
    </div>
  );
}




// import React from 'react';

// export default function AdminDash() {


//   return (
//     <div>
//       <h1>Hey, Admin!</h1>
//       {/* <p>Please select date range</p> */}
//       {/* <form action="/action_page.php">
//         <label for="birthday">Please select date range:</label>
//         <input type="date" id="queryStart" /><input type="date" id="queryEnd" />
//           <input type="submit" />
//       </form> */}
//       <form className={classes.container} noValidate>
//         <TextField
//           id="time"
//           label="Alarm clock"
//           type="time"
//           defaultValue="07:30"
//           className={classes.textField}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           inputProps={{
//             step: 300, // 5 min
//           }}
//         />
//       </form>
//     </div>
//   )
// }


