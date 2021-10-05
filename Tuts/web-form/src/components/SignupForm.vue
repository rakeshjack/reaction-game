<template>
  <div class="container">
      <div class="row">
          <div class="col-md-offset-3 col-md-6">

                <h2>Basic Forms</h2>
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                    <label for="email">Email:</label>
                    <input 
                            type="email" 
                            class="form-control" 
                            id="email" 
                            placeholder="Enter email" 
                            name="email"
                            required
                            v-model="email">
                    </div>
                    <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input 
                            type="password" 
                            class="form-control" 
                            id="pwd" 
                            placeholder="Enter password" 
                            name="pwd"
                            required
                            v-model="password">
                            <span v-if="passwordError" class="error">{{passwordError}}</span>
                    </div>

                    <div class="form-group">
                    <label>Select Options:</label>
                        <select class="form-control" v-model="role">
                            <option value="developer"> Web Developer</option>
                            <option value="designer"> Web Designer</option>
                        </select>
                    </div>

                    <div class="form-group">
                    <label for="skills">Skills:</label>
                    <input 
                            type="text" 
                            class="form-control" 
                            id="skills" 
                            placeholder="Enter skills" 
                            name="tempSkill"
                            v-model="tempSkill"
                            @keyup="addSkill">
                            
                            <div class="pill" v-for="skill in skills" :key="skill" @click="deleteSkill(skill)">{{skill}}</div>
                    </div>

                    <div class="checkbox">
                    <label><input v-model="terms" type="checkbox" name="remember" required> Accept terms and conditions</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Create a account</button>
                </form>
          </div>
      </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            email: 'Mario',
            password: '',
            role: 'designer',
            terms: false,
            tempSkill:'',
            skills:[],
            passwordError:''
        }
    },
    methods: {
        addSkill(e) {
            console.log(e);
            if(e.key === ',' && this.tempSkill) {
                if(!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = '';
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) =>{
                return skill !==item;
            });
        },
        handleSubmit() {
            console.log('form submitted');
            // validate password
            this.passwordError = this.password.length > 5 ? 
            '' : 'Password must be atleast 6 char long';
            
            if(!this.passwordError) {
                console.log('email' , this.email);
                console.log('password', this.password);
                console.log('role', this.role);
                console.table('skills', this.skills);
                console.log('terms accepted', this.terms);
            }
        }
    }

}
</script>

<style>
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color:#777;
    cursor: pointer;
}
.error {
    color:#ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

</style>