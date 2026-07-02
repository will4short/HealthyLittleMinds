from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT=Path(__file__).resolve().parents[1]; OUT=ROOT/"images"
def font(size,bold=False):
    options=[Path("C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf")]
    for p in options:
        if p.exists(): return ImageFont.truetype(str(p),size)
    return ImageFont.load_default()
def make(source,name,kicker,title,subtitle):
    bg=Image.new("RGB",(1200,630),(238,248,246)); src=Image.open(ROOT/source).convert("RGB")
    src.thumbnail((560,560)); x=1200-src.width-55; y=(630-src.height)//2
    mask=Image.new("L",src.size,0); ImageDraw.Draw(mask).rounded_rectangle((0,0,*src.size),26,fill=255)
    bg.paste(src,(x,y),mask)
    d=ImageDraw.Draw(bg); d.rounded_rectangle((45,45,730,585),radius=28,fill=(255,255,255,242))
    d.rounded_rectangle((78,82,330,125),radius=21,fill=(233,246,243)); d.text((98,92),kicker,font=font(18,True),fill="#397466")
    yy=155
    for line in title:
        d.text((78,yy),line,font=font(54,True),fill="#254E70"); yy+=62
    d.multiline_text((78,yy+20),subtitle,font=font(24),fill="#496270",spacing=8)
    d.text((78,535),"Healthy Little Minds",font=font(20,True),fill="#E56F65")
    bg.save(OUT/name,"WEBP",quality=90,method=6)
make("images/teachers-hub-hero.webp","teachers-hub-social.webp","TEACHERS HUB",["Practical Emotional","Learning Tools"],"Classroom strategies, regulation tools,\nand teacher-friendly resources.")
make("images/will-talks.webp","will-talks-social.webp","WILL TALKS",["Psychology &","Human Behavior"],"Reflective conversations for\neveryday mental health.")
