//****************************************Model****************************************//

/***************************************************************************************************
 * grab pokemon api - gets the information from the pokemon api
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * grab card api - gets the information from the card api
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * grab youtube api - gets the information from the youtube api
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * text appear - starts showing text on page for game play (called by start game function)
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * attack with hp - attacks with hp
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */



//****************************************Controller****************************************//

/***************************************************************************************************
 * initialize - starts loading everything needed (tells model to load apis)
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */





// var card_list = get_card_data().then(make_pokemon_object,failed_to_get_data);
// console.log(card_list);
/***************************************************************************************************
 * start game - starts function in model to make text appear for player (called by start button)
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */



//****************************************View****************************************//

/***************************************************************************************************
 * card animation - card slides in and flips after start
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * button light - lights up buttons
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */

/***************************************************************************************************
 * start button - starts game, calls start game function in controller
 * @param  {undefined} none
 * @returns {undefined} none
 * @calls {undefined} none
 */





$(document).ready(initializeApp);
var get_yt_api_data = null;
var additional_pokemon_info = null
var available_cards = null;
var get_card_api_data = null;
var video_list = null;
var game_model = null;
var game_controller = null;
var player_controller = null;
function initializeApp(){
    console.log('im here');
    get_card_api_data = new Grab_data();
    get_card_api_data.get_card_data().then(get_card_api_data.make_pokemon_object, get_card_api_data.failed_to_get_data);
    game_model = new Game_model();
    game_controller = new Game_controller();
    player_controller = new Player_controller();
    game_controller.startGame();
}


