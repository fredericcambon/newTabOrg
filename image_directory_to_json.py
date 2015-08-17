#!/usr/bin/python

import json
import os


if __name__ == "__main__":

    image_list = os.listdir('images')
    list = []
    for img in image_list:
        list.append({
            'file': '../images/{}'.format(img)
        })

    functions = """
var today = new Date();
var onejan = new Date( today.getFullYear(),0,1);
var dayOfTheYear = Math.ceil(( today - onejan) / 86400000);
var rnd_index = dayOfTheYear % backgrounds.length;
var m = document.getElementById("container");
m.style['background-image'] = 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(' + backgrounds[rnd_index].file + ')';"""

    print "var backgrounds = {};\n{}".format(json.dumps(list), functions)
