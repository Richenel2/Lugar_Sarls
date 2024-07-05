import { Metier } from './../pages/Model/metier';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UnivCart } from '../pages/Model/univ-cart';

@Injectable({
  providedIn: 'root',
})
export class UniversityDetailsService {
  constructor(private http: HttpClient) {}
  url = 'https://lugar.onrender.com/api/ecole/?p=1&page_size=20';
  urlMetier="https://lugar.onrender.com/api/metier/?p=1&page_size=20"


  getAllMetiers(){
    return this.http.get<Metier[]>(this.urlMetier);
  }
  getAll() {
    return this.http.get<UnivCart[]>(this.url);
  }
  universityDetails = [
    //     {
    //       id:1,
    //       img: "string",
    //       name: "Apple",
    //       rating: 2,
    //       fee: "string",
    //       link: "",
    //       contact:"",
    //       desc:`Quis pariatur tempor laborum fugiat enim. Nostrud sit eu cillum nisi ad nostrud cillum exercitation. Laborum aliquip commodo Lorem do aute ut laboris qui voluptate est est.Ea officia cupidatat ad amet aliqua velit velit.
    //       Labore amet laboris esse nostrud mollit labore eiusmod. Cupidatat mollit consectetur ex laboris nisi et ut id ipsum sunt quis adipisicing esse tempor. Eu qui nulla nostrud fugiat fugiat.Ipsum duis nostrud sint irure amet aliqua magna ea nisi enim ut exercitation cillum mollit. Qui laborum in est non. Eu eiusmod commodo deserunt pariatur amet commodo ipsum irure magna adipisicing mollit exercitation duis.Esse eiusmod duis tempor sint ea cillum consectetur nulla ullamco. Nulla eiusmod do quis ullamco dolore consectetur dolore deserunt nulla. Nisi eiusmod nulla cupidatat minim tempor quis. Nisi ullamco ea duis proident eiusmod consequat. Eiusmod non nostrud pariatur nisi ex velit.`,
    //       departments: [{name:"sssCillum  nostrud ad.", year: 5, fee:20000}, {name:"excepteur non", year:3, fee:300000},{name:"non exercitation", year:7, fee: 50000}, {name:"exercitation", year:3, fee:600000}],
    //     },
    //     {
    //       id:2,
    //       img: "string",
    //       name: "Banana",
    //       rating: 2,
    //       link: "",
    //       contact:"",
    //       fee: "string",
    //       desc:`Quis pariatur tempor laborum fugiat enim. Nostrud sit eu cillum nisi ad nostrud cillum exercitation. Laborum aliquip commodo Lorem do aute ut laboris qui voluptate est est.Ea officia cupidatat ad amet aliqua velit velit. Labore amet laboris esse nostrud mollit labore eiusmod. Cupidatat mollit consectetur ex laboris nisi et ut id ipsum sunt quis adipisicing esse tempor. Eu qui nulla nostrud fugiat fugiat.Ipsum duis nostrud sint irure amet aliqua magna ea nisi enim ut exercitation cillum mollit. Qui laborum in est non. Eu eiusmod commodo deserunt pariatur amet commodo ipsum irure magna adipisicing mollit exercitation duis.Esse eiusmod duis tempor sint ea cillum consectetur nulla ullamco. Nulla eiusmod do quis ullamco dolore consectetur dolore deserunt nulla. Nisi eiusmod nulla cupidatat minim tempor quis. Nisi ullamco ea duis proident eiusmod consequat. Eiusmod non nostrud pariatur nisi ex velit`,
    //       departments: [{name:"sssCillum  nostrud ad.", year: 5, fee:20000}, {name:"excepteur non", year:3, fee:300000},],
    //     },
    //     {
    //       id:3,
    //       img: "string",
    //       name: "Orange",
    //       rating: 2,
    //       link: "",
    //       contact:"",
    //       fee: "string",
    //       desc:`Quis pariatur tempor laborum fugiat enim. Nostrud sit eu cillum nisi ad nostrud cillum exercitation. Laborum aliquip commodo Lorem do aute ut laboris qui voluptate est est.Adipisicing adipisicing mollit nisi tempor anim adipisicing qui nulla. Occaecat duis veniam dolor nostrud esse esse. Id ex fugiat cupidatat ex. Esse minim ut est consectetur minim labore quis tempor cillum consectetur cupidatat consequat officia dolore. Lorem mollit sint eu ipsum minim aliquip ex non elit. Dolore laboris tempor dolore sunt veniam fugiat quis anim. Commodo reprehenderit ipsum aute eiusmod irure ad anim elit fugiat commodo aute cupidatat qui.
    // Cillum id irure exercitation tempor. Eiusmod est elit aliquip officia sint magna sint enim mollit Lorem ullamco. Nisi magna nostrud quis quis aliqua consectetur Lorem consectetur. Officia labore officia elit esse sit. Magna adipisicing fugiat exercitation eu. Sunt ut id id aliquip irure veniam pariatur quis reprehenderit cupidatat sit veniam. Id do consectetur eu cillum pariatur proident laboris labore nulla occaecat occaecat voluptate pariatur ea.`,
    //       departments: [{name:"sssCillum  nostrud ad.", year: 5, fee:20000}, {name:"excepteur non", year:3, fee:300000},{name:"non exercitation", year:7, fee: 50000}, {name:"exercitation", year:3, fee:600000}],
    //     },
    //     {
    //       id:4,
    //       img: "string",
    //       name: "Grapes",
    //       rating: 2,
    //       link: "",
    //       contact:"",
    //       fee: "string",
    //       desc:`Quis pariatur tempor laborum fugiat enim. Nostrud sit eu cillum nisi ad nostrud cillum exercitation. Laborum aliquip commodo Lorem do aute ut laboris qui voluptate est est.
    //       Ea officia cupidatat ad amet aliqua velit velit. Labore amet laboris esse nostrud mollit labore eiusmod. Cupidatat mollit consectetur ex laboris nisi et ut id ipsum sunt quis adipisicing esse tempor. Eu qui nulla nostrud fugiat fugiat.Ipsum duis nostrud sint irure amet aliqua magna ea nisi enim ut exercitation cillum mollit. Qui laborum in est non. Eu eiusmod commodo deserunt pariatur amet commodo ipsum irure magna adipisicing mollit exercitation duis.Esse eiusmod duis tempor sint ea cillum consectetur nulla ullamco. Nulla eiusmod do quis ullamco dolore consectetur dolore deserunt nulla. Nisi eiusmod nulla cupidatat minim tempor quis. Nisi ullamco ea duis proident eiusmod consequat. Eiusmod non nostrud pariatur nisi ex velit
    //       `,
    //       departments: [{name:"sssCillum  nostrud ad.", year: 5, fee:20000}, {name:"excepteur non", year:3, fee:300000},],
    //     },
  ];
}
