from bs4 import BeautifulSoup
from urllib2 import urlopen
from time import sleep

BASE_URL = "http://www.knitpicks.com/yarns/All_Knit_Picks_Yarn__L300198.html?showAll=yes"

def make_soup(url):
    html = urlopen(url).read()
    return BeautifulSoup(html, "lxml")

def get_category_links(section_url):
    soup = make_soup(section_url)
    rtcol = soup.find("div", "rtcol")
    items = rtcol.findAll("div", class_="listItem")
    category_links = [BASE_URL + div.a["href"] for dd in rtcol.findAll("dd")]
    return category_links
