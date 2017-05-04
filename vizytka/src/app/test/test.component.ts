import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  myFunction() {
    let d: string[] = [];
    let sum: number = 0;
    let k: number;
    let i: number;
    let m: number = 1;
    let b: string;

    while (m < 11) {
      b = (<HTMLInputElement>document.querySelector('input[name="' + m + '"]:checked')).value;
      console.log(b);
      d.push(b);
      m++;
    }

    for (i = 0; i < d.length; i++) {
      if (d[i] == "a") {
        k = 3;
      } else if (d[i] == "b") {
        k = 2;
      } else {
        k = 1;
      }
      sum = sum + k;
    }
    console.log(sum);
    if (sum < 17) {
      document.getElementById("demo").innerHTML = "Ви не дуже піклуєтеся про те, як ви їсте." +
        " Вам треба терміново міняти свої звички. Не сідайте за стіл, коли втомилися чи знервовані." +
        " Їжте поволі, ретельно пережовуючи їжу, - це дозволить вам не переїдати. Візьміть собі за правило" +
        " припиняти прийом їжі не менше ніж за дві години до сну.";
    } else if (sum >= 17 && sum <= 23) {
      document.getElementById("demo").innerHTML = "Вам знайома істина, що надмірне захоплення їжею так само, " +
        "як і зарозуміле неувага до неї, нерозумно, але іноді ви про це забуваєте. Вам не завадить ставитися до" +
        " того, як ви їсте, більш відповідально, щоб максимально вберегти себе в майбутньому від проблем зі здоров'ям, " +
        "пов'язаних з неправильним харчуванням. ";
    } else {
      document.getElementById("demo").innerHTML = "Сократ сказав: «Ми не для того живемо, щоб їсти, а їмо для того, щоб жити»." +
        "Ви серйозно і відповідально ставитеся до того, як ви їсте, тим самим допомаєте своєму організму жити і працювати з " +
        "максимальною віддачею"
    }
  }
}

