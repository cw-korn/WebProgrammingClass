<template>
    <div class="container">
        <h1>List of Users</h1>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." v-model="search">
                <span class="input-group-btn">
                  &nbsp;&nbsp;  
                  <button class="btn btn-primary" type="button">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    Search
                  </button>
                </span>
              </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
        </div>
        <br>
        <table class="table table-stripped table-borderes">
            <thead>
                <tr>
                <th class="center">First Name</th>
                <th class="center">Last Name</th>
                <th class="center">Email</th>
                <th class="center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user_alias in Users" v-bind:key="user_alias.id"> <!-- filterUsers -> Users -->
                    <td class="text-left">{{ user_alias.firstName }}</td>
                    <td class="text-left">{{ user_alias.lastName }}</td>
                    <td class="text-left">{{ user_alias.email }}</td>
                    <td class="text-left">
                        <!-- <router-link :to="{ path: 'userupdate', name: 'UpdateUser', params:{userId: user_alias._id} }">
                          <button class="btn btn-xs btn-warning">Edit</button>&nbsp;
                        </router-link>   
                        <router-link to="/users">
                          <button class="btn btn-xs btn-danger" data-toggle="modal" data-target=".bd-example-modal-sm" @click="DELETE(user_alias._id)"><span class="glyphicon glyphicon-trash">Delete</span></button>
                        </router-link> -->
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link to="/adduser">
            <button class="btn btn-large btn-block btn-success full-width">Add User</button>
        </router-link>
        <br>
    <!-- <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this item? </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <router-link to="/users">
                 <button type="button" class="btn btn-danger" @click="delUser(uid)">Delete</button>
              </router-link>
          </div>
        </div>
      </div>
    </div> -->
    </div>
  </template>

<script>
    // library to call API from frontend
    import axios from 'axios'

    export default {
        name: 'Users',
        data() {
            return {
                search: '',
                uid: '',
                Users: []
            }
        },
        // When go to page, first thing we will see is the list of users
        mounted() {
            //connect to backend
            axios.get('http://127.0.0.1:3427/users')
            .then ((response)=> {
                console.log(response.data)
                this.Users = response.data // put data in Users
            })
        }
    }
</script>