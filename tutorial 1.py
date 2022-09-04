from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello! this is the home page <h1>HELLO</h1>"

@app.route("/<text_here_will_be_displayed_on_screen>")
def user(text_here_will_be_displayed_on_screen):
    return f"hello {text_here_will_be_displayed_on_screen}!"

@app.route("/admin")
def admin():
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run()