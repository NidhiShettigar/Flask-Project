from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

'''
@app.route("/")
def home():
    #return "Hello! this is the home page <h1>HELLO</h1>"
    return render_template("index.html")

@app.route("/<name>")
def home(name):
    #return render_template("index.html", content=name, number=2)
    #return render_template("index.html")
    return render_template("index.html", content_for_loop=["nidi", "harshu", "jina"])
'''

@app.route("/")
def home():
    return render_template("index.html", content="Testing")
'''
@app.route("/<text_here_will_be_displayed_on_screen>")
def user(text_here_will_be_displayed_on_screen):
    return f"hello {text_here_will_be_displayed_on_screen}!"


@app.route("/admin") 
def admin():
    return redirect(url_for("home"))


@app.route("/admin/") #/admin/ or /admin works same
def admin():
    return redirect(url_for("user", text_here_will_be_displayed_on_screen="Admin!"))

'''
if __name__ == "__main__":
    app.run(debug=True) 
    
#debug=True will run code automatically