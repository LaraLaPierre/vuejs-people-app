/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      peoples: [
              {
               name: "Gina Lalabrigida",
               bio: "She sings pretty",
               bioVisible: true
              },
              {
               name: "Martin Short",
               bio: "He's super funny ",
               bioVisible: true
              },
              {
               name: "Joe Biden",
               bio: "He loves Barack",
               bioVisible: true
              },
              {
               name: "Bette Midler",
               bio: "She's the wind beneath your wings",
               bioVisible: true
              }
              ],
    newPeople: { name: "", bio: "", completed: true}
    };
  },
  created: function() {},
  methods: {
    addPeople: function() {
      if (this.newPeople.name !== "" && this.newPeople.bio !== "") {
      this.peoples.push(this.newPeople);
      this.newPeople = { name: "", bio: "", bioVisible: true}
      }
    },
    deletePeople: function(people) {
        var index = this.peoples.indexOf(people);
        this.peoples.splice(index, 1);
    },

    toggleBioVisible: function(people) {
      people.bioVisible = !people.bioVisible;
    }
  },
 
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});


// name, bio, bioVisible. (bioVisible is a boolean, which should be true by default).