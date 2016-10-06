# ScholarSmith

Static Generator of E-Learning Content

Mostly a learning exercise for React, Redux, Typescript, ES6 and a bunch of other stuff.

Code is made avaliable under the terms of the MIT Licence.

Don't use this for anything your salary depends on, it will probaly not go well

## Archteture

Repo atm consists of the template and building code in `src`, what unit tests there are in `test,` and a sample course in `tutorial`.

The tutorial folder had a strict structure that needs to be followed or else the course will fail to build (and fail pretty hard in current iteration). Structior is as follows

```
tutorial
    |
    |-topics
    |   |
    |   |-topic1
    |

TODO: Rest of this graph
```

Pages consist of single .md files with yaml front matter discribing the page. Questions are listed in the questions.yaml file.

## How to Run

`npm build`

Then:

`npm start`

Default address is

`localhost:8080`