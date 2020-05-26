import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "- My App -";

  ninjaStats;

  ngOnInit() {
    fetch("https://fortnite-api.p.rapidapi.com/stats-alternative/ninja", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
        "x-rapidapi-key": "9265500cecmsh1c6f1103b2b0197p19cfeajsn325a1394646d",
      },
    })
      .then(async (response: any) => {
        this.ninjaStats = await response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
