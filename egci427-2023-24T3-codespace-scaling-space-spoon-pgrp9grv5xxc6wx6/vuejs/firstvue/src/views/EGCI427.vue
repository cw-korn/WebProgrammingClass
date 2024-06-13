<template>
  <div class="ecgi427">
    <p>This is an EGCI427 page</p>
    <!-- <p>{{ title }}</p>
    <p>{{ age*2 }}</p>
    Counter : {{ count }} -->

    <!-- <p>{{ age<=30? 'young' : 'old' }}</p>
    <p>{{ title.split(' ') }}</p>
    <p>{{ getFullname() }}</p>
    <p>{{ getFullname2('Bob', 'Cat') }}</p> -->
    <!-- <a href="{{ aurl }}">Vuejs.org</a>
    <span v-bind:title="aurl">Vuejs.org</span> -->
    <!-- <button v-on:click="clickButton">Click here</button><br>
    <button @click="clickButton">Click here</button><br>
    <input type="text" v-model="title"><br>
    Title: {{ title }}<br>
    <div v-html="html"></div>

  
  <p v-if="itemsInStock >10">{{ itemsInStock }} in stock</p>
  <p v-else-if="itemsInStock > 0">Hurry up, there are just a few item left!</p>
  <p v-else>Too bad, we 're all out!</p>

  <p v-show="isNinja">Invisible like a ninja</p>
<p v-show="!isNinja">Here I am!</p>

<button v-on:click = "isNinja = !isNinja">Toggle Ninja Skills</button> -->
<!-- <h1>Movies</h1>
<ul>
  <li v-for="title in movieTitles">{{title}}</li>
</ul>

<h1>Employee</h1>
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Title</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="employer in employee">
      <td>{{ employer.name }}</td>
      <td>{{ employer.title }}</td>
    </tr>
  </tbody>
</table>
<ul>
  <li v-for="(value, propertyName) in person">
    {{propertyName}}: {{ value }}</li>
</ul> -->
<span>Student Name: </span>
  <input v-model="newData.studentName">
  <br><br>
  <span>Score: </span>
  <input v-model="newData.score">
  <br><br>
  <button @click="addScore">Add Score</button>
  <br><br>
  <span>Average Score {{averageScore}}</span>
  <ul>
    <li v-for="data in datas"> 
      {{data.studentName}}, Score:  {{data.score}}
    </li>
  </ul>
  </div>
</template>

<script>
export default {
name: 'EGCI427',
data() {
  return {
    newData: {
    studentName: '',
    score: 0
  },
  datas: [
    {
      studentName: "Student 1",
      score: 50
    },
    {
      studentName: "Student 2",
      score: 5
    }
    ]
  //   movieTitles: ['Starwar', 'Indiana Jones', 'Sleeping Beauty'],
  //   employee: [
  //    { name: 'Abby', title: 'Accountant'},
  //    { name: 'Andy', title: 'Marketing Manager'},
  //    { name: 'Brandon', title: 'Vue.js Expert'}
  //  ],
  //  person: {
  //      firstName: 'Bob',
  //      lastName: 'Cat',
  //      age: 27
  //    }
    //  title: "hello world",
    //  html: "<h1>Hello</h1>",
    //  itemsInStock: 0,
    //  isNinja: true,
    // age: 31,
    // count: 0,
    // firstName: 'Bob',
    // lastName: 'Cat'
    //aurl: 'www.vuejs.org'
  }
},
mounted() {
  // setInterval(() =>{
  //   this.count++
  // },1000)
},
methods: {
  // getFullname: function(){
  //   return this.firstName+ ' '+this.lastName
  // },
  // getFullname2: function(first, last){
  //     return first + ' ' + last
  // }
  clickButton: function(){
    alert("hello")
  },
  addScore: function() {
    this.datas.push({
      studentName: this.newData.studentName,
      score: this.newData.score
    });
    this.newData.studentName = '';
    this.newData.score = 0;
  }

},
computed: {
averageScore: function() {
    var sum = this.datas.reduce(function(accumulate, data) {
      return accumulate + Number(data.score);
    }, 0);
    return (sum / this.datas.length).toFixed(2);
  }
}
}
</script>


<style>
@media (min-width: 1024px) {
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
}
</style>
