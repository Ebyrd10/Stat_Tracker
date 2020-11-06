<template>
<div>
<Example />
  <section class="search">
  <h1>Track Player Stats</h1>
  <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="game">Game</label>
        <select name="game" id="game" v-model="game">
            <!-- Displays the official game title of all games in the list with an abbreviated lowercase name for the form option value -->
            <option v-for="(game, id) in gameList" v-bind:key="id" v-bind:value = game> {{ game.gameTitle }}</option>
        </select>
    </div>
    <div class="form-group">
        <label for="platform"> Platform</label>
        <select name="platform" id="platform" v-model="platform">
            <!-- Displays the valid platforms for a given game based on the id of the platforms in a game object's gamePlatforms array -->
            <option v-for="(platform,id) in validPlatforms" v-bind:key="id" v-bind:value = platform.platformName> {{ platform.platformTitle }}</option>
        </select>
    </div>
    <div class="form-group">
        <label for="gamertag">Gamertag</label>
        <input type="text" name="text" v-model="gamertag" id="gamertag"
        placeholder="Origin ID, Xbox Live, PSN ID, etc"
        />
    </div>
    <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
    </div>
  </form>
    </section>
</div>
</template>

<script>
import Example from './Example'

export default {
    name : 'Search',
    components: {
    Example
  },
    data() {
        return {
            // Sets psn and "" as defaults for the platform and gamertag
            game: {gameName: 'overwatch', id:0, gameTitle: 'Overwatch', gamePlatforms: [0, 1, 2]},
            platform: "psn",
            gamertag: "",
            //Desrcibing what the names and valid platforms of a game
            gameList: [
                {gameName: 'overwatch', id:0, gameTitle: 'Overwatch', gamePlatforms: [0, 1, 2]},
                {gameName: 'apex', id:1, gameTitle: 'Apex Legends', gamePlatforms: [0, 1, 3]},
                {gameName: 'csgo', id:2, gameTitle: 'Counter-Strike: Global Offensive', gamePlatforms: [0, 1, 4]}
            ],
            //Describing the possible gaming platforms/serivces that are supported by this app
            platformList: [
                {platformName: "psn", id: 0, platformTitle: "Playstation"},
                {platformName: "xbl", id: 1, platformTitle: "Xbox"},
                {platformName: "battlenet", id: 2, platformTitle: "Battlenet"},
                {platformName: "origin", id: 3, platformTitle: "Origin"},
                {platformName: "steam", id: 4, platformTitle: "Steam"}
            ]
        }
    },

    computed: {
    validPlatforms() {
        //filters out the list of gameplatforms stored in the 'game' object in the top level of data
      return this.game.gamePlatforms.map(platformIndex => {
         return this.platformList[platformIndex];
      })
    }
  },

    //when the search bar is active, eg. on home screen, show the apex person image
    beforeCreate() {
        document.body.className = "body-bg-image";
    },
    methods: {
        onSubmit() {
            if(!this.gamertag) {
                this.$toasted.show("Please enter a gamertag",{
                    duration: 3000,
                    icon: 'exclamation-circle'
                });
            } 
            else {
                this.$router.push(`/profile/${this.game.gameName}/${this.platform}/${this.gamertag}`);
            }
        }
    }
};
</script>

<style>

</style>