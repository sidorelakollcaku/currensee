import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const Welcome = () => {
  const Wrapper = props => (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8">
        <Grid container justify="center">
          <Card className="welcomeCard">
            <CardContent>{props.children}</CardContent>
          </Card>
        </Grid>
      </div>
    </div>
  );

  const Body = () => (
    <div className="welcomeWrapper">
      <h2 className="text-center welcomeTitle">WELCOME!</h2>
      <hr />
      <div className="welcomeMsgWrapper">
        <p className="welcomeMsg">
          Add some items to your budget to get started. You can add budget
          income or expenses as individual transactions or recurring
          transactions up to 6 months forward. You can also search Walmart.com
          to find products and add them to your budget or view them on
          Walmart.com.
        </p>
        <hr />
        <p className="welcomeMsg">
          After you add a transaction this message will disappear and charts
          will replace it like magic! Once you add income, your time based
          charts will populate. Once you add an expense your spending based
          charts will populate.
        </p>
        <hr />
        <p className="welcomeMsg">
          The table above can be used to delete budget items individually or to
          sort by relevant the column headers. The budget total at the top will
          represent your disposable income after you add both income and
          expenses to your budget. If you only track income or only track
          expenses it will represent the sums of your total budget items.
        </p>
      </div>
    </div>
  );
  return (
    <Wrapper>
      <Body />
    </Wrapper>
  );
};

export default Welcome;
