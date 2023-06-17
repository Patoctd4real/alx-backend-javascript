/**
 * Contains the miscellaneous route handlers.
 * @author patrick christopher <https://github.com/patoctd4real>
 */
class AppController {
    static getHomepage(request, response) {
        response.status(200).send('Hello Holberton School!');
    }
}

export default AppController;
module.exports = AppController;