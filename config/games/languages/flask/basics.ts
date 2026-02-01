import { GameBuilder } from "@/types/game";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { knownTags as kt } from "@/config/tag";

export const flaskGames = [
  new GameBuilder()
    .setTitle("Flask Route Decorator")
    .setHref("flask-route-basic")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Fix the Flask route decorator syntax")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask",
            StateEnum.NORMAL,
            "Import Flask",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine(
            '@app.rout("/")',
            StateEnum.ERROR,
            "Typo! Should be @app.route() - missing the 'e'.",
          ),
          new CodeLine(
            '@app.route("/")',
            StateEnum.CORRECT,
            "Correct! The decorator method is 'route' with an 'e'.",
            10,
          ),
          new CodeLine(
            '@app.Route("/")',
            StateEnum.WRONG,
            "Python is case-sensitive. The decorator method is lowercase 'route'.",
          ),
          new CodeLine(
            '@app.router("/")',
            StateEnum.WRONG,
            "The Flask method is 'route', not 'router'.",
          ),
          new CodeLine(
            '@route.app("/")',
            StateEnum.WRONG,
            "The correct syntax is @app.route(), not @route.app().",
          ),
          new CodeLine(
            "def hello():",
            StateEnum.NORMAL,
            "Define handler function",
          ),
          new CodeLine(
            '    return "Hello World"',
            StateEnum.NORMAL,
            "Return response",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Flask uses decorators to map URLs to functions. Find the syntax error in this route definition. The decorator should tell Flask how to handle requests to specific URLs.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask Request Method")
    .setHref("flask-request-method")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Identify the correct HTTP method specification in Flask")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask",
            StateEnum.NORMAL,
            "Import Flask",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize app",
          ),
          new CodeLine(
            '@app.route("/submit", method="POST")',
            StateEnum.ERROR,
            "Parameter should be 'methods' (plural), not 'method' (singular).",
          ),
          new CodeLine(
            '@app.route("/submit", methods=["POST"])',
            StateEnum.CORRECT,
            "Correct! Use 'methods' parameter with a list of HTTP verbs.",
            15,
          ),
          new CodeLine(
            '@app.route("/submit", methods="POST")',
            StateEnum.WRONG,
            "The methods parameter must be a list, not a string.",
          ),
          new CodeLine(
            '@app.route("/submit", HTTP="POST")',
            StateEnum.WRONG,
            "The parameter name is 'methods', not 'HTTP'.",
          ),
          new CodeLine(
            '@app.route("/submit", POST)',
            StateEnum.WRONG,
            "Must use keyword argument syntax: methods=['POST'].",
          ),
          new CodeLine(
            "def handle_post():",
            StateEnum.NORMAL,
            "Function definition",
          ),
          new CodeLine(
            '    return "Data received"',
            StateEnum.NORMAL,
            "Return response",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Flask routes can handle different HTTP methods like GET, POST, PUT, etc. Find the syntax error in specifying which methods this route should accept.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask JSON Response")
    .setHref("flask-json-response")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Fix the Flask JSON response method")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask, jsonify",
            StateEnum.NORMAL,
            "Import Flask and jsonify",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize app",
          ),
          new CodeLine(
            '@app.route("/api/data")',
            StateEnum.NORMAL,
            "Define route",
          ),
          new CodeLine(
            "return json.dump({'status': 'success'})",
            StateEnum.ERROR,
            "Wrong function! Use jsonify() for Flask, not json.dump(). Also json module not imported.",
          ),
          new CodeLine(
            "return jsonify({'status': 'success'})",
            StateEnum.CORRECT,
            "Correct! jsonify() converts Python objects to JSON responses with proper headers.",
            15,
          ),
          new CodeLine(
            "return {'status': 'success'}",
            StateEnum.WRONG,
            "Raw dict won't be converted to JSON with correct headers. Use jsonify().",
          ),
          new CodeLine(
            "return JSON({'status': 'success'})",
            StateEnum.WRONG,
            "There's no JSON() function in Flask. Use jsonify() instead.",
          ),
          new CodeLine(
            "return json_encode({'status': 'success'})",
            StateEnum.WRONG,
            "Use jsonify() for Flask responses, not json_encode().",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "When returning JSON data in Flask, you should use the jsonify() function to ensure proper headers and content type. Find and fix the JSON response error.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask Template Rendering")
    .setHref("flask-template-render")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Fix the Flask template rendering function")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask, render_template",
            StateEnum.NORMAL,
            "Import Flask and render_template",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine(
            '@app.route("/profile")',
            StateEnum.NORMAL,
            "Define route",
          ),
          new CodeLine(
            "return render_file('profile.html', name='Alice')",
            StateEnum.ERROR,
            "Wrong function name! Use render_template(), not render_file().",
          ),
          new CodeLine(
            "return render_template('profile.html', name='Alice')",
            StateEnum.CORRECT,
            "Correct! render_template() loads and renders HTML templates from the templates folder.",
            15,
          ),
          new CodeLine(
            "return open('profile.html').read()",
            StateEnum.WRONG,
            "This reads raw file content. Use render_template() to process the template.",
          ),
          new CodeLine(
            "return render('profile.html', name='Alice')",
            StateEnum.WRONG,
            "The function is render_template(), not just render().",
          ),
          new CodeLine(
            "return template_render('profile.html', name='Alice')",
            StateEnum.WRONG,
            "The correct function is render_template(), not template_render().",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Flask uses the render_template() function to load and render HTML templates with variables. Find the incorrect function name in this code.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask URL Parameter")
    .setHref("flask-url-parameter")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Extract URL parameters in Flask routes")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask",
            StateEnum.NORMAL,
            "Import Flask",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine(
            '@app.route("/user/John")',
            StateEnum.NORMAL,
            "Route with hardcoded path",
          ),
          new CodeLine(
            "def get_user(user:)",
            StateEnum.ERROR,
            "Syntax error in function parameter. Should be def get_user(user): with parameter name before colon.",
          ),
          new CodeLine(
            "def get_user(user):",
            StateEnum.CORRECT,
            "Correct! The parameter matches the <user> variable in the route path.",
            15,
          ),
          new CodeLine(
            "def get_user(username):",
            StateEnum.WRONG,
            "Parameter name must match the URL variable. Should be 'user', not 'username'.",
          ),
          new CodeLine(
            "def get_user():",
            StateEnum.WRONG,
            "Missing parameter. URL variables must be captured as function parameters.",
          ),
          new CodeLine(
            'def get_user(request.args["user"]):',
            StateEnum.WRONG,
            "URL path variables use function parameters directly, not request.args.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Flask allows capturing URL parameters using angle brackets in the route path. Find the syntax error in the function definition that should accept this URL parameter.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask Request Object")
    .setHref("flask-request-object")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Access form data using Flask's request object")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask, request",
            StateEnum.NORMAL,
            "Import Flask and request",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine(
            '@app.route("/login", methods=["POST"])',
            StateEnum.NORMAL,
            "POST route for login",
          ),
          new CodeLine(
            "username = request.form[username]",
            StateEnum.ERROR,
            "Variable name should be quoted as a string: request.form['username'], not request.form[username].",
          ),
          new CodeLine(
            "username = request.form['username']",
            StateEnum.CORRECT,
            "Correct! Access form fields as dictionary keys with string quotes.",
            15,
          ),
          new CodeLine(
            "username = request['username']",
            StateEnum.WRONG,
            "Must use request.form to access POST form data, not just request.",
          ),
          new CodeLine(
            "username = request.args['username']",
            StateEnum.WRONG,
            "Use request.args for query parameters, not form data. For POST, use request.form.",
          ),
          new CodeLine(
            "username = request.data('username')",
            StateEnum.WRONG,
            "request.data is raw bytes. Use request.form for parsed form fields.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Flask's request object is used to access data sent by clients. Find the syntax error when accessing form data from a POST request.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask Session Management")
    .setHref("flask-session-management")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Store and retrieve user data using Flask sessions")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask, session",
            StateEnum.NORMAL,
            "Import Flask and session",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine(
            "app.secret_key = 'secret123'",
            StateEnum.NORMAL,
            "Set secret key for session",
          ),
          new CodeLine(
            "sessoin['user_id'] = 42",
            StateEnum.ERROR,
            "Typo! 'sessoin' should be 'session'. Missing the second 's'.",
          ),
          new CodeLine(
            "session['user_id'] = 42",
            StateEnum.CORRECT,
            "Correct! Store user data in the session dictionary for persistence.",
            15,
          ),
          new CodeLine(
            "request.session['user_id'] = 42",
            StateEnum.WRONG,
            "Use session directly, not request.session. Session is imported separately.",
          ),
          new CodeLine(
            "Flask.session['user_id'] = 42",
            StateEnum.WRONG,
            "Session is a global object, not accessed through the Flask class.",
          ),
          new CodeLine(
            "app.session['user_id'] = 42",
            StateEnum.WRONG,
            "Session is stored in the global session object, not in the app instance.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Flask sessions allow you to store user-specific data that persists across requests. Find the typo in accessing the session object.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask Error Handling")
    .setHref("flask-error-handling")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Handle HTTP errors properly in Flask")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask",
            StateEnum.NORMAL,
            "Import Flask",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine(
            "@app.errorhandler(404)",
            StateEnum.NORMAL,
            "Register 404 error handler",
          ),
          new CodeLine(
            "def page_not_found(e):",
            StateEnum.NORMAL,
            "Define error handler function",
          ),
          new CodeLine(
            "    return 'Page not found', 400",
            StateEnum.ERROR,
            "Wrong status code! A 404 error should return 404 status, not 400. 400 is 'Bad Request'.",
          ),
          new CodeLine(
            "    return 'Page not found', 404",
            StateEnum.CORRECT,
            "Correct! Return the proper 404 status code when page is not found.",
            15,
          ),
          new CodeLine(
            "    return 404, 'Page not found'",
            StateEnum.WRONG,
            "Wrong order. Flask expects (message/template, status_code) order.",
          ),
          new CodeLine(
            "    return 'Page not found'",
            StateEnum.WRONG,
            "Must return a status code tuple. Without it, Flask defaults to 200 (OK).",
          ),
          new CodeLine(
            "    return error=404, message='Page not found'",
            StateEnum.WRONG,
            "Flask expects positional arguments or kwargs differently. Use ('message', 404) format.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Flask error handlers must return the correct HTTP status code. Find the error in the 404 handler response.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask Redirect Function")
    .setHref("flask-redirect-function")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Redirect users to different URLs in Flask")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask, redirect",
            StateEnum.NORMAL,
            "Import Flask and redirect",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine(
            '@app.route("/old-page")',
            StateEnum.NORMAL,
            "Old route",
          ),
          new CodeLine(
            "return rediect(url_for('home'))",
            StateEnum.ERROR,
            "Typo! 'rediect' should be 'redirect' - missing 'r'.",
          ),
          new CodeLine(
            "return redirect(url_for('home'))",
            StateEnum.CORRECT,
            "Correct! redirect() sends user to a different URL.",
            15,
          ),
          new CodeLine(
            "return url_for('home')",
            StateEnum.WRONG,
            "url_for() returns a URL string, not a redirect. Use redirect(url_for()) together.",
          ),
          new CodeLine(
            "return redirect('/home')",
            StateEnum.WRONG,
            "While this works, url_for() is preferred to avoid hardcoding URLs.",
          ),
          new CodeLine(
            "redirect(url_for('home'))",
            StateEnum.WRONG,
            "Must return the redirect(), not just call it.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Flask's redirect() function is used to send users to different pages. Find the typo in this redirect call.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask URL Building")
    .setHref("flask-url-building")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Build URLs dynamically using url_for()")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask, url_for",
            StateEnum.NORMAL,
            "Import Flask and url_for",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine(
            "@app.route('/profile/<int:user_id>')",
            StateEnum.NORMAL,
            "Profile route with user_id",
          ),
          new CodeLine(
            "profile_url = url_for('profile', userid=42)",
            StateEnum.ERROR,
            "Parameter name mismatch! Route expects 'user_id' but passing 'userid'.",
          ),
          new CodeLine(
            "profile_url = url_for('profile', user_id=42)",
            StateEnum.CORRECT,
            "Correct! Parameter names in url_for() must match the route function.",
            15,
          ),
          new CodeLine(
            "profile_url = url_for('/profile', 42)",
            StateEnum.WRONG,
            "Use function name, not the route path. Also use keyword argument.",
          ),
          new CodeLine(
            "profile_url = url_for('profile', id=42)",
            StateEnum.WRONG,
            "Parameter name must match the route. Route has 'user_id', not 'id'.",
          ),
          new CodeLine(
            "profile_url = '/profile/42'",
            StateEnum.WRONG,
            "Hardcoding URLs is not recommended. Use url_for() to build URLs dynamically.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "The url_for() function builds URLs for Flask routes. Find the parameter name mismatch in this code.",
    )
    .setCategory("Flask")
    .build(),

  new GameBuilder()
    .setTitle("Flask Cookie Setting")
    .setHref("flask-cookie-setting")
    .setTags([kt.python, kt.flask])
    .setSynopsis("Set cookies in Flask responses")
    .setLevel(2)
    .setDisabled(false)
    .setExtern(false)
    .setCodeBlock(
      new CodeBlock(
        [
          new CodeLine(
            "from flask import Flask, make_response",
            StateEnum.NORMAL,
            "Import Flask and make_response",
          ),
          new CodeLine(
            "app = Flask(__name__)",
            StateEnum.NORMAL,
            "Initialize Flask app",
          ),
          new CodeLine("@app.route('/login')", StateEnum.NORMAL, "Login route"),
          new CodeLine(
            "resp = make_response('Login successful')",
            StateEnum.NORMAL,
            "Create response object",
          ),
          new CodeLine(
            "resp.set_cookie(name='user_id', value=42)",
            StateEnum.ERROR,
            "Wrong syntax! set_cookie() doesn't use keyword names 'name' and 'value'. Use positional: set_cookie('user_id', 42).",
          ),
          new CodeLine(
            "resp.set_cookie('user_id', 42)",
            StateEnum.CORRECT,
            "Correct! set_cookie() takes cookie name and value as positional arguments.",
            15,
          ),
          new CodeLine(
            "resp.cookie('user_id', 42)",
            StateEnum.WRONG,
            "The method is set_cookie(), not cookie().",
          ),
          new CodeLine(
            "resp['Set-Cookie'] = 'user_id=42'",
            StateEnum.WRONG,
            "While this works, use set_cookie() method for proper handling.",
          ),
          new CodeLine(
            "response.set_cookie('user_id', 42)",
            StateEnum.WRONG,
            "Must use the response object variable 'resp', not 'response'.",
          ),
        ],
        "python",
      ),
    )
    .setText(
      "Cookies are set on the response object in Flask. Find the syntax error in setting a cookie.",
    )
    .setCategory("Flask")
    .build(),
];
