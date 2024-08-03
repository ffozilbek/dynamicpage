window.addEventListener("DOMContentLoaded", ()=> {
    class MyCards {
        constructor(src,moviename,movieyear,runningtime,directedby,productby,starring,parentSelector,...classes) {
            this.src = src;
            this.moviename = moviename;
            this.movieyear = movieyear;
            this.runningtime = runningtime;
            this.directby =  directedby;
            this.productby = productby;
            this.starring = starring;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const newDiv = document.createElement("div");

            if(this.classes.length === 0) {
                this.classes = "movies__card";
                newDiv.classList.add(this.classes);
            } else {
                this.classes.forEach(className => newDiv.classList(className))
            }

            newDiv.innerHTML = `
                <div class="movies__card-inner">
                    <img class="movies__card-img" src="${this.src}">
                    <div class="movies__card-info">
                        <h3 class="movies__movie-name-year"><span class="movies__movie-name">${this.moviename}</span>
                            <span class="movies__movie-year">${this.movieyear}</span>
                        </h3>
                        <table>
                            <tr>
                                <th>running time</th>
                                <td class="running-time">${this.runningtime} minutes</td>
                            </tr>
                            <tr>
                                <th>directed by</th>
                                <td class="directedby">${this.directby}</td>
                            </tr>
                            <tr>
                                <th>produced by</th>
                                <td class="productby">${this.productby}</td>
                            </tr>
                            <tr>
                                <th>starring</th>
                                <td class="starring">${this.starring}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            `

            this.parent.appendChild(newDiv);
        }
    }

    new MyCards("./img/harrypotter.jpg","harry potter",2001,152,"Chris Columbus","David Heyman","Daniel Radcliffe, Emma Watson,Rupert Grint,Alan Rickman",".movies").render();

    new MyCards("./img/lalaland.jpg","La La Land",2016,128,"Damien Chazelle","Jordan Horowitz, Marc Platt, Fred Berger, Gary Gilbert","Ryan Gosling, Emma Stone",".movies").render();

    new MyCards("./img/matrix.jpg","The Matrix",1999,136,"the wachowskis","joel silver","keanu reeves,laurence fishburne,carrie-anne moss",".movies").render();

    new MyCards("./img/twilight.jpg","twilight",2008,121,"catherine hardwicke","wyck godfrey,greg mooradian,mark morgan","kristen stewart,robert pattinson,billy burke",".movies").render();

})