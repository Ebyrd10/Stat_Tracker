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
            <option v-for="(game, id) in gameList" v-bind:key="id" v-bind:value = game.gameName> {{ game.gameTitle }}</option>
        </select>
    </div>
    <div class="form-group">
        <label for="platform"> Platform</label>
        <select name="platform" id="platform" v-model="platform">
            <option value="psn">Playstation</option>
            <option value="xbl">Xbox</option>
            <option value="origin">Origin</option>
            <option value="battlenet">Battlenet</option>
            <option value="steam">Steam</option>
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
            game: 'overwatch',
            platform: "psn",
            gamertag: "",
            //Desrcibing what the names and valid platforms of a game
            gameList: [
                {gameName: 'overwatch', id:0, gameTitle: 'Overwatch', gamePlatforms: ["psn", "xbl", "battlenet"]},
                {gameName: 'apex', id:1, gameTitle: 'Apex Legends', gamePlatforms: ["psn", "xbl", "origin"]},
                {gameName: 'csgo', id:2, gameTitle: 'Counter-Strike: Global Offensive', gamePlatforms: ["psn", "xbl", "steam"]}
            ]
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
                this.$router.push(`/profile/${this.game}/${this.platform}/${this.gamertag}`);
            }
        }
    }
};
</script>

<style>

</style>