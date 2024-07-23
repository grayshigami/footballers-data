<template>
    <h2>Midfielders</h2>
    <button class="new-button" @click="visible = true">
        <i class="fa-solid fa-plus"></i>
        Create
    </button>
    <button class="delete-button" @click="deleteSelectedFootballers">
        <i class="fa-solid fa-trash"></i>
        Delete
    </button>
    <pv-dialog class="fb-dialog" header="Insert midfielder" v-model:visible="visible" modal>
        <div class="inside-dialog">
            <div class="two-inp">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="newFootballer.name">
                <label for="nationalityName">Nationality name</label>
                <input type="selector" id="nationalityName" v-model="newFootballer.nationality.name">
            </div>
            <label for="nationalityFlag">Nationality flag</label>
            <input type="text" id="nationalityFlag" v-model="newFootballer.nationality.flag">
            <label for="countryOfBirthFlag">Country of birth flag</label>
            <input type="text" id="countryOfBirthFlag" v-model="newFootballer.countryOfBirth.flag">
            <div class="divider">
                <div class="left">
                    <label for="birthplace">Birthplace</label>
                    <input type="text" id="birthplace" v-model="newFootballer.birthplace">
                    <label for="countryOfBirth">Country of birth</label>
                    <input type="text" id="countryOfBirth" v-model="newFootballer.countryOfBirth.name">
                    <label for="position">Position</label>
                    <input type="text" id="position" v-model="newFootballer.position">
                    <label for="height">Height</label>
                    <input type="number" id="height" v-model="newFootballer.height">
                    <label for="birthday">Birthday</label>
                    <input type="text" id="birthday" v-model="newFootballer.birthday">
                    <label for="apps">Apps</label>
                    <input type="number" id="apps" v-model="newFootballer.apps">
                </div>
                <div class="right">
                    <label for="goals">Goals</label>
                    <input type="number" id="goals" v-model="newFootballer.goals">
                    <label for="intCaps">IntCaps</label>
                    <input type="number" id="intCaps" v-model="newFootballer.intCaps">
                    <label for="intGoals">IntGoals</label>
                    <input type="number" id="intGoals" v-model="newFootballer.intGoals">
                    <label for="team">Team</label>
                    <input type="text" id="team" v-model="newFootballer.team.name">
                    <label for="teamLogo">Team logo</label>
                    <input type="text" id="teamLogo" v-model="newFootballer.team.logo">
                    <label for="tc">Team country</label>
                    <input type="text" id="tc" v-model="newFootballer.tc">
                </div>
            </div>
        </div>
        <button @click="visible = false">Cancel</button>
        <button @click="insertFootballer">Insert</button>
    </pv-dialog>
    <pv-dialog class="fb-dialog" header="Update midfielder" v-model:visible="updateVisible" modal>
        <div class="inside-dialog">
            <div class="two-inp">
                <label for="newName">Name</label>
                <input type="text" id="newName" v-model="updatedFootballer.name">
                <label for="newNationalityName">Nationality name</label>
                <input type="text" id="newNationalityName" v-model="updatedFootballer.nationality.name">
            </div>
            <label for="newNationalityFlag">Nationality flag</label>
            <input type="text" id="newNationalityFlag" v-model="updatedFootballer.nationality.flag">
            <label for="newCountryOfBirthFlag">Country of birth flag</label>
            <input type="text" id="newCountryOfBirthFlag" v-model="updatedFootballer.countryOfBirth.flag">
            <div class="divider">
                <div class="left">
                    <label for="newBirthplace">Birthplace</label>
                    <input type="text" id="newBirthplace" v-model="updatedFootballer.birthplace">
                    <label for="newCountryOfBirth">Country of birth</label>
                    <input type="text" id="newCountryOfBirth" v-model="updatedFootballer.countryOfBirth.name">
                    <label for="newPosition">Position</label>
                    <input type="text" id="newPosition" v-model="updatedFootballer.position">
                    <label for="newHeight">Height</label>
                    <input type="number" id="newHeight" v-model="updatedFootballer.height">
                    <label for="newBirthday">Birthday</label>
                    <input type="text" id="newBirthday" v-model="updatedFootballer.birthday">
                    <label for="newApps">Apps</label>
                    <input type="number" id="newApps" v-model="updatedFootballer.apps">
                </div>
                <div class="right">
                    <label for="newGoals">Goals</label>
                    <input type="number" id="newGoals" v-model="updatedFootballer.goals">
                    <label for="newIntCaps">IntCaps</label>
                    <input type="number" id="newIntCaps" v-model="updatedFootballer.intCaps">
                    <label for="newIntGoals">IntGoals</label>
                    <input type="number" id="newIntGoals" v-model="updatedFootballer.intGoals">
                    <label for="newTeam">Team</label>
                    <input type="text" id="newTeam" v-model="updatedFootballer.team.name">
                    <label for="newTeamLogo">Team logo</label>
                    <input type="text" id="newTeamLogo" v-model="updatedFootballer.team.logo">
                    <label for="newtc">Team country</label>
                    <input type="text" id="newtc" v-model="updatedFootballer.tc">
                </div>
            </div>
        </div>
        <button @click="updateVisible = false">Cancel</button>
        <button @click="updateFootballer">Update</button>
    </pv-dialog>
    <table class="fw-table">
        <thead>
            <tr>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
                <th>
                    <select name="" id="" class="selec-value" v-model="filters.heightComparing">
                        <option value="equal" selected>Equal</option>
                        <option value="greater">Greater</option>
                        <option value="lower">Lower</option>
                    </select>
                </th>
                <th>-</th>
                <th>
                    <select name=""  id="" class="selec-value" v-model="filters.appsComparing">
                        <option value="equal">Equal</option>
                        <option value="greater">Greater</option>
                        <option value="lower">Lower</option>
                    </select>
                </th>
                <th>
                    <select name="" id="" class="selec-value" v-model="filters.goalsComparing">
                        <option value="equal">Equal</option>
                        <option value="greater">Greater</option>
                        <option value="lower">Lower</option>
                    </select>
                </th>
                <th>
                    <select name="" id="" class="selec-value" v-model="filters.intCapsComparing">
                        <option value="equal">Equal</option>
                        <option value="greater">Greater</option>
                        <option value="lower">Lower</option>
                    </select>
                </th>
                <th>
                    <select name="" id="" class="selec-value" v-model="filters.intGoalsComparing">
                        <option value="equal">Equal</option>
                        <option value="greater">Greater</option>
                        <option value="lower">Lower</option>
                    </select>
                </th>
                <th>-</th>
                <th>-</th>
                <th>-</th>
            </tr>
            <tr>
                <th>*</th>
                <th>*</th>
                <th>
                    <input type="text" v-model="filters.name">
                </th>
                <th>
                    <input type="text" class="inp" v-model="filters.nationality.name">
                </th>
                <th>
                    <input type="text" class="inp" v-model="filters.birthplace">
                </th>
                <th>
                    <input type="text" class="inp" v-model="filters.countryOfBirth.name">
                </th>
                <th>
                    <input type="text" class="bsp" v-model="filters.position">
                </th>
                <th>
                    <input type="text" class="gci" v-model="filters.height">
                </th>
                <th>
                    <input type="text" class="igci" v-model="filters.birthday">
                </th>
                <th>
                    <input type="text" class="cgci" v-model="filters.apps">
                </th>
                <th>
                    <input type="text" class="cgci" v-model="filters.goals">
                </th>
                <th>
                    <input type="text" class="igci" v-model="filters.intCaps">
                </th>
                <th>
                    <input type="text" class="igci" v-model="filters.intGoals">
                </th>
                <th>
                    <input type="text" v-model="filters.team.name">
                </th>
                <th>
                    <input type="text" class="it" v-model="filters.tc">
                </th>
                <th>*</th>
            </tr>
            <tr>
                <th>*</th>
                <th>#</th>
                <th @click="sortByColumn('name')">
                    Name
                    <i v-if="sortBy === 'name' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'name' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('nationality')">
                    Nationality
                    <i v-if="sortBy === 'nationality' && sortDirection === 'asc'" 
                    class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'nationality' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('birthplace')">
                    Birthplace
                    <i v-if="sortBy === 'birthplace' && sortDirection === 'asc'" 
                    class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'birthplace' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('countryOfBirth')">
                    CountryOfBirth
                    <i v-if="sortBy === 'countryOfBirth' && sortDirection === 'asc'" 
                    class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'countryOfBirth' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('position')">
                    Position
                    <i v-if="sortBy === 'position' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'position' && sortDirection === 'desc'"
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('height')">
                    Height
                    <i v-if="sortBy === 'height' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'height' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('birthday')">
                    Birthday
                    <i v-if="sortBy === 'birthday' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'birthday' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('apps')">
                    Apps
                    <i v-if="sortBy === 'apps' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'apps' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('goals')">
                    Goals
                    <i v-if="sortBy === 'goals' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'goals' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('intCaps')">
                    IntCaps
                    <i v-if="sortBy === 'intCaps' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'intCaps' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('intGoals')">
                    IntGoals
                    <i v-if="sortBy === 'intGoals' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'intGoals' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('team')">
                    Team
                    <i v-if="sortBy === 'team' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'team' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th @click="sortByColumn('tc')">
                    TC
                    <i v-if="sortBy === 'tc' && sortDirection === 'asc'" class="fa-solid fa-sort-up"></i>
                    <i v-else-if="sortBy === 'tc' && sortDirection === 'desc'" 
                    class="fa-solid fa-sort-down"></i>
                    <i v-else class="fa-solid fa-sort header-icon"></i>
                </th>
                <th>*</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(footballer, index) in filteredFootballers" :key="footballer._id">
                <td>
                    <input type="checkbox" v-model="selectedFootballers" :value="footballer._id" class="selector">
                </td>
                <td>{{ index + 1 }}</td>
                <td>{{ footballer.name }}</td>
                <td class="td-n">
                    <img :src="footballer.nationality.flag" alt="" width="20" height="15">
                    {{ footballer.nationality.name }}
                </td>
                <td>{{ footballer.birthplace }}</td>
                <td class="td-n">
                    <img :src="footballer.countryOfBirth.flag" alt="" width="20" height="15">
                    {{ footballer.countryOfBirth.name }}
                </td>
                <td>{{ footballer.position }}</td>
                <td>{{ footballer.height ? footballer.height.toFixed(2) : 0 }}</td>
                <td>{{ footballer.birthday }}</td>
                <td class="tdwd">{{ footballer.apps }}</td>
                <td>{{ footballer.goals }}</td>
                <td>{{ footballer.intCaps }}</td>
                <td>{{ footballer.intGoals }}</td>
                <td>
                    <img :src="footballer.team.logo" alt="" width="19" height="20">
                    {{ footballer.team.name }}
                </td>
                <td>{{ footballer.tc }}</td>
                <td>
                    <i class="fa-solid fa-pen-to-square edit-button" @click="showEditDialog(footballer)"></i>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import axios from 'axios';

export default {
    name: 'midfielders-component',
    data() {
        return {
            footballers: [],
            footballer: {},
            newFootballer: this.restartNewFootballer(),
            updatedFootballer: {
                name: '',
                nationality: {
                    flag: '',
                    name: ''
                },
                birthplace: '',
                countryOfBirth: {
                    flag: '',
                    name: ''
                },
                position: '',
                height: 0.00,
                birthday: '',
                apps: 0,
                goals: 0,
                intCaps: 0,
                intGoals: 0,
                team: {
                    logo: '',
                    name: ''
                },
                tc: ''
            },
            filters: {
                name: '',
                nationality: {
                    flag: '',
                    name: ''
                },
                birthplace: '',
                countryOfBirth: {
                    flag: '',
                    name: ''
                },
                position: '',
                height: null,
                birthday: '',
                apps: null,
                goals: null,
                intCaps: null,
                intGoals: null,
                team: {
                    logo: '',
                    name: ''
                },
                tc: '',
                heightComparing: 'equal',
                appsComparing: 'equal',
                goalsComparing: 'equal',
                intCapsComparing: 'equal',
                intGoalsComparing: 'equal'
            },
            selectedFootballers: [],
            visible: false,
            updateVisible: false,
            sortBy: '',
            sortDirection: 'asc',
            filterName: '',
            filterBirthplace: ''
        };
    },
    mounted() {
        this.getFootballers();
    },
    computed: {
        filteredFootballers() {
            return this.footballers.filter(footballer => {
                const filterName = this.filters.name.toLowerCase();
                const filterNationality = this.filters.nationality.name.toLowerCase();
                const filterBirthplace = this.filters.birthplace.toLowerCase();
                const filterCountryOfBirth = this.filters.countryOfBirth.name.toLowerCase();
                const filterPosition = this.filters.position.toLowerCase();
                const filterHeight = this.filters.height;
                const filterBirthday = this.filters.birthday.toLowerCase();
                const filterApps = this.filters.apps;
                const filterGoals = this.filters.goals;
                const filterIntCaps = this.filters.intCaps;
                const filterIntGoals = this.filters.intGoals;
                const filterTeam = this.filters.team.name.toLowerCase();
                const filterTc = this.filters.tc.toLowerCase();
                const heightComparing = this.filters.heightComparing;
                const appsComparing = this.filters.appsComparing;
                const goalsComparing = this.filters.goalsComparing;
                const intCapsComparing = this.filters.intCapsComparing;
                const intGoalsComparing = this.filters.intGoalsComparing;

                const matchesFilterName = !filterName || footballer.name.toLowerCase().includes(filterName);
                const matchesFilterNationality = !filterNationality || footballer.nationality.name.toLowerCase()
                .includes(filterNationality);
                const matchesFilterBirthplace = !filterBirthplace || footballer.birthplace.toLowerCase()
                .includes(filterBirthplace);
                const matchesFilterCountryOfBirth = !filterCountryOfBirth || footballer.countryOfBirth.name.toLowerCase()
                .includes(filterCountryOfBirth);
                const matchesFilterPosition = !filterPosition || footballer.position.toLowerCase().includes(filterPosition);
                const matchesFilterBirthday = !filterBirthday || footballer.birthday.toLowerCase().includes(filterBirthday);
                const matchesFilterTeam = !filterTeam || footballer.team.name.toLowerCase().includes(filterTeam);
                const matchesFilterTc = !filterTc || footballer.tc.toLowerCase().includes(filterTc);

                
                let matchesFilterHeight = true;
                let matchesFilterApps = true;
                let matchesFilterGoals = true;
                let matchesFilterIntCaps = true;
                let matchesFilterIntGoals = true;

                if (filterHeight) {
                    const height = parseFloat(filterHeight);

                    if (heightComparing === 'greater') {
                        matchesFilterHeight = footballer.height > height;
                    } else if (heightComparing === 'lower') {
                        matchesFilterHeight = footballer.height < height;
                    } else if (heightComparing === 'equal') {
                        matchesFilterHeight = footballer.height === height;
                    }
                }

                if (filterApps) {
                    const apps = parseInt(filterApps);

                    if (appsComparing === 'greater') {
                        matchesFilterApps = footballer.apps > apps;
                    } else if (appsComparing === 'lower') {
                        matchesFilterApps = footballer.apps < apps;
                    } else if (appsComparing === 'equal') {
                        matchesFilterApps = footballer.apps === apps;
                    }
                }

                if (filterGoals) {
                    const goals = parseInt(filterGoals);

                    if (goalsComparing === 'greater') {
                        matchesFilterGoals = footballer.goals > goals;
                    } else if (goalsComparing === 'lower') {
                        matchesFilterGoals = footballer.goals < goals;
                    } else if (goalsComparing === 'equal') {
                        matchesFilterGoals = footballer.goals === goals;
                    }
                }

                if (filterIntCaps) {
                    const intCaps = parseInt(filterIntCaps);

                    if (intCapsComparing === 'greater') {
                        matchesFilterIntCaps = footballer.intCaps > intCaps;
                    } else if (intCapsComparing === 'lower') {
                        matchesFilterIntCaps = footballer.intCaps < intCaps;
                    } else if (intCapsComparing === 'equal') {
                        matchesFilterIntCaps = footballer.intCaps === intCaps;
                    }
                }

                if (filterIntGoals) {
                    const intGoals = parseInt(filterIntGoals);

                    if (intGoalsComparing === 'greater') {
                        matchesFilterIntGoals = footballer.intGoals > intGoals;
                    } else if (intGoalsComparing === 'lower') {
                        matchesFilterIntGoals = footballer.intGoals < intGoals;
                    } else if (intGoalsComparing === 'equal') {
                        matchesFilterIntGoals = footballer.intGoals === intGoals;
                    }
                }

                return matchesFilterName && matchesFilterNationality && matchesFilterBirthplace &&
                matchesFilterCountryOfBirth && matchesFilterPosition && matchesFilterHeight && matchesFilterBirthday &&
                matchesFilterApps && matchesFilterGoals && matchesFilterIntCaps && matchesFilterIntGoals &&
                matchesFilterTeam && matchesFilterTc;
            });
        },
    },
    methods: {
        restartNewFootballer() {
            return {
                name: '',
                nationality: {
                    flag: '',
                    name: ''
                },
                birthplace: '',
                countryOfBirth: {
                    flag: '',
                    name: ''
                },
                position: '',
                height: 0.00,
                birthday: '',
                apps: 0,
                goals: 0,
                intCaps: 0,
                intGoals: 0,
                team: {
                    logo: '',
                    name: ''
                },
                tc: ''
            }
        },
        async insertFootballer() {
            this.visible = false;
            try {
                const response = await axios.post('http://localhost:3000/midfielders', this.newFootballer);
                this.footballers.push(response.data);
                this.newFootballer = this.restartNewFootballer();
            } catch (error) {
                console.error('Error inserting midfielder:', error);
            }
        },
        showEditDialog(footballer) {
            this.footballer = { ...footballer };
            this.updatedFootballer.name = footballer.name;
            this.updatedFootballer.nationality.flag = footballer.nationality.flag;
            this.updatedFootballer.nationality.name = footballer.nationality.name;
            this.updatedFootballer.birthplace = footballer.birthplace;
            this.updatedFootballer.countryOfBirth.flag = footballer.countryOfBirth.flag;
            this.updatedFootballer.countryOfBirth.name = footballer.countryOfBirth.name;
            this.updatedFootballer.position = footballer.position;
            this.updatedFootballer.height = footballer.height;
            this.updatedFootballer.birthday = footballer.birthday;
            this.updatedFootballer.apps = footballer.apps;
            this.updatedFootballer.goals = footballer.goals;
            this.updatedFootballer.intCaps = footballer.intCaps;
            this.updatedFootballer.intGoals = footballer.intGoals;
            this.updatedFootballer.team.logo = footballer.team.logo;
            this.updatedFootballer.team.name = footballer.team.name;
            this.updatedFootballer.tc = footballer.tc;
            this.updateVisible = true;
        },
        async updateFootballer() {
            this.updateVisible = false;
            try {
                const response = await axios.put(`http://localhost:3000/midfielders/${this.footballer._id}`, {
                    ...this.footballer,
                    name: this.updatedFootballer.name,
                    nationality: {
                        flag: this.updatedFootballer.nationality.flag,
                        name: this.updatedFootballer.nationality.name
                    },
                    birthplace: this.updatedFootballer.birthplace,
                    countryOfBirth: {
                        flag: this.updatedFootballer.countryOfBirth.flag,
                        name: this.updatedFootballer.countryOfBirth.name
                    },
                    position: this.updatedFootballer.position,
                    height: this.updatedFootballer.height,
                    birthday: this.updatedFootballer.birthday,
                    apps: this.updatedFootballer.apps,
                    goals: this.updatedFootballer.goals,
                    intCaps: this.updatedFootballer.intCaps,
                    intGoals: this.updatedFootballer.intGoals,
                    team: {
                        logo: this.updatedFootballer.team.logo,
                        name: this.updatedFootballer.team.name
                    },
                    tc: this.updatedFootballer.tc
                });

                const index = this.footballers.findIndex(f => f.id === this.footballer.id);

                if (index !== -1) {
                    this.footballers.splice(index, 1, response.data);
                }

                this.footballers = [...this.footballers];
                this.getFootballers();
            } catch (error) {
                console.error('Error saving changes:', error);
            }
        },
        async getFootballers() {
            try {
                const response = await axios.get('http://localhost:3000/midfielders');
                this.footballers = response.data;
            } catch (error) {
                console.error('Error when fetching midfielders:', error);
            }
        },
        deleteSelectedFootballers() {
            this.selectedFootballers.forEach(id => {
                axios.delete(`http://localhost:3000/midfielders/${id}`)
                .then(() => {
                    this.getFootballers();
                })
                .catch(error => {
                    console.error('Error deleting midfielders:', error);
                });
            })
        },
        sortByColumn(column) {
            if (column == this.sortBy) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortBy = column;
                this.sortDirection = 'asc';
            }

            if ((column == "Height" || column == "Apps" || column == "Goals" || column == "IntCaps" ||
                column == "IntGoals") && this.sortDirection == 'asc') {
                    this.footballers.sort(function(a, b) { return a - b });
            } else if ((column == "Height" || column == "Apps" || column == "Goals" || column == "IntCaps" ||
                column == "IntGoals") && this.sortDirection == 'desc') {
                    this.footballers.sort(function(a, b) { return b - a });
            } else {
                this.footballers.sort((a, b) => {
                    if (this.sortDirection === 'asc') {
                        return a[column] > b[column] ? 1 : -1;
                    } else {
                        return a[column] < b[column] ? 1 : -1;
                    }
                });
            }
        }
    }
}
</script>
<style scoped>
h2 {
    margin: 20px;
}

.new-button {
    margin-left: 20px;
    background-color: rgb(10, 175, 10);
    color: white;
    font-weight: bold;
    border: none;
    font-size: 16px;
    padding: 15px;
    border-radius: 5px;
}

.new-button:hover {
    cursor: pointer;
    background-color: rgb(65, 213, 65);
}

.delete-button {
    margin-left: 20px;
    background-color: red;
    color: white;
    font-weight: bold;
    border: none;
    font-size: 16px;
    padding: 15px;
    border-radius: 5px;
}

.delete-button:hover {
    cursor: pointer;
    background-color: rgb(255, 118, 118);
}

.dialog-space {
    margin: 0 auto;
}

.fb-dialog {
    background-color: white;
}

.fb-dialog button {
    font-size: 16px;
    padding: 15px;
    margin: 10px;
}

.fb-dialog input {
    margin: 5px;
    padding: 5px;
}

.fb-dialog label {
    margin-left: 5px;
}

.inside-dialog {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.two-inp {
    display: flex;
    background-color: white;
}

.divider {
    display: flex;
    width: 90%;
}

.left, .right {
    display: flex;
    flex-direction: column;
}

.selec-value {
    box-sizing: border-box;
    padding: 2px;
    width: 70px;
}

.fw-table {
    font-family: arial, sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    background-color: rgb(246, 246, 246);
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
}

th input {
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
}

.td-n {
    width: 130px;
}

.inp {
    width: 120px;
}

.gci {
    width: 55px;
}

.igci {
    width: 70px;
}

.cgci {
    width: 55px;
}

.it {
    width: 40px;
}

.bsp {
    width: 130px;
}

.fw-table td, th {
    text-align: left;
}

th:hover {
    cursor: pointer;
}

th {
    font-size: 14px;
    padding: 5px;
}

td {
    font-size: 14px;
    border-top: 1px solid black;
    padding: 3px 3px 2px 3px;
}

.selector {
    width: 15px;
    height: 15px;
}

.edit-button:hover {
    cursor: pointer;
}
</style>