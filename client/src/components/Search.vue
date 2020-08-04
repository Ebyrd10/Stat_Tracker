<template>
  <section class="search">
  <h1>Track Player Stats</h1>
  <form v-on:submit.prevent="onSubmit">
    <div class="form-group">
        <label for="platform"> Platform</label>
        <select name="platform" id="platform" v-model="platform">
            <option value="psn">Playstation</option>
            <option value="xbl">Xbox</option>
            <option value="Origin">Origin</option>
        </select>
    </div>
    <div class="form-group">
        <label for="gamertag">Gamertag</label>
        <input type="text" name="text" v-model="gamertag" id="gamertag"
        placeholder="Origin ID, Xbox Live gamertage, PSN ID, etc"
        />
    </div>
    <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
    </div>
  </form>
    </section>
</template>

<script>
export default {
    name : 'Search',
    data() {
        return {
            // Sets psn and "" as defaults for the platform and gamertag
            platform: "psn",
            gamertag: "",
        }
    },
    //when the search bar is active, eg. on home screen, show the apex person image
    beforeCreate() {
        document.body.className = "body-bg-image";
    }
};
</script>

<style>

</style>