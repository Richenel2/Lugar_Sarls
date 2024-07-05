import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../pages/Model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionDetailsService {

  constructor(private http : HttpClient) { }
  url='https://lugar.onrender.com/api/question/'
  urlRep='https://lugar.onrender.com/api/corrige/'

  getQuestion(){
    return this.http.get<Question>(this.url);
  }

  sendAnswers(response: any){
    return this.http.post<any>(this.urlRep, response);
  }

  // questionDetails = [
  //   {
  //     id:1,
  //     question: "Dolore velit ipsum sunt excepteur aute sunt incididunt duis ut.",
  //     answers: [
  //       {
  //         id:1,
  //         answer: "apples"
  //       },
  //       {
  //         id:2,
  //         answer: "bananas"
  //       },
  //       {
  //         id:3,
  //         answer: "Grapes"
  //       },
  //       {
  //         id:4,
  //         answer: "Berries"
  //       }
  //     ]

  //   },
  //   {
  //     id:2,
  //     question: "Dolore velit ipsum sunt excepteur aute sunt incididunt duis ut.",
  //     answers: [
  //       {
  //         id:1,
  //         answer: "apples"
  //       },
  //       {
  //         id:2,
  //         answer: "bananas"
  //       },
  //       {
  //         id:3,
  //         answer: "Grapes"
  //       },
  //       {
  //         id:4,
  //         answer: "Berries"
  //       }
  //     ]

  //   },{
  //     id:3,
  //     question: "Dolore velit ipsum sunt excepteur aute sunt incididunt duis ut.",
  //     answers: [
  //       {
  //         id:3,
  //         answer: "apples"
  //       },
  //       {
  //         id:2,
  //         answer: "bananas"
  //       },
  //       {
  //         id:3,
  //         answer: "Grapes"
  //       },
  //       {
  //         id:4,
  //         answer: "Berries"
  //       }
  //     ]

  //   },
  //   {
  //     id:4,
  //     question: "Dolore velit ipsum sunt excepteur aute sunt incididunt duis ut.",
  //     answers: [
  //       {
  //         id:1,
  //         answer: "apples"
  //       },
  //       {
  //         id:2,
  //         answer: "bananas"
  //       },
  //       {
  //         id:3,
  //         answer: "Grapes"
  //       },
  //       {
  //         id:4,
  //         answer: "Berries"
  //       }
  //     ]

  //   }
  // ]
}
