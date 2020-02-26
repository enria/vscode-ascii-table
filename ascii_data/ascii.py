from xml.dom.minidom import parse

with open("ascii.html", encoding="utf-8") as f:
    dom = parse(f)
    codes = dom.getElementsByTagName("tr")
    print(len(codes))

    def gettext(node, i):
        try:
            return node[i].getElementsByTagName("div")[0].childNodes[0].data.strip()
        except:
            return node[i].childNodes[0].data.strip()
    for c in codes:
        infos = c.getElementsByTagName("td")
        print("{} ".format(gettext(infos, 2)),end="")
