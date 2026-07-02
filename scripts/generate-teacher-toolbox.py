from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

OUT = Path(__file__).resolve().parents[1] / "worksheets" / "teacher-toolbox"
OUT.mkdir(parents=True, exist_ok=True)
W, H = A4
INK, CORAL, MINT, SKY, GOLD = map(HexColor, ["#254E70", "#E56F65", "#E9F6F3", "#F1F8FA", "#F6C753"])

def base(name, title, subtitle):
    c = canvas.Canvas(str(OUT / name), pagesize=A4)
    c.setTitle(title)
    c.setFillColor(MINT); c.roundRect(28, H-120, W-56, 84, 18, fill=1, stroke=0)
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 23); c.drawString(48, H-72, title)
    c.setFont("Helvetica", 10.5); c.drawString(48, H-94, subtitle)
    c.setFillColor(HexColor("#708793")); c.setFont("Helvetica", 8); c.drawRightString(W-36, 20, "Healthy Little Minds | Teacher Toolbox")
    return c

def box(c, x, y, w, h, title, fill=SKY):
    c.setFillColor(fill); c.roundRect(x, y, w, h, 12, fill=1, stroke=0)
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 13); c.drawString(x+14, y+h-24, title)

def emotion_cards():
    c=base("emotion-cards.pdf","Emotion Cards","Cut out, point, or use for a quick private classroom check-in.")
    emotions=[("Happy",":)"),("Calm","~"),("Worried","?"),("Sad",":("),("Frustrated","!!"),("Angry","!"),("Scared","?"),("Unsure","...")]
    for i,(label,symbol) in enumerate(emotions):
        col,row=i%2,i//2; x=42+col*258; y=H-255-row*142
        c.setFillColor([MINT,SKY,HexColor("#FFF2EE"),HexColor("#FFF8DF")][row%4]); c.roundRect(x,y,230,116,15,fill=1,stroke=0)
        c.setFillColor(CORAL); c.circle(x+48,y+60,27,fill=1,stroke=0); c.setFillColor(HexColor("#FFFFFF")); c.setFont("Helvetica-Bold",14); c.drawCentredString(x+48,y+55,symbol)
        c.setFillColor(INK); c.setFont("Helvetica-Bold",17); c.drawString(x+88,y+70,label); c.setFont("Helvetica",9); c.drawString(x+88,y+48,"My body feels: __________")
    c.save()

def feelings_scale():
    c=base("feelings-scale.pdf","My Feelings Scale","Point to a number, then choose one helpful next step.")
    labels=[("5","Overwhelmed",CORAL),("4","Very stressed",HexColor("#F39B67")),("3","Worried",GOLD),("2","Okay",HexColor("#88C9A1")),("1","Calm",HexColor("#65A596"))]
    for i,(n,l,col) in enumerate(labels):
        y=H-220-i*84; c.setFillColor(col); c.roundRect(55,y,72,60,14,fill=1,stroke=0); c.setFillColor(HexColor("#FFFFFF")); c.setFont("Helvetica-Bold",25); c.drawCentredString(91,y+19,n)
        c.setFillColor(SKY); c.roundRect(142,y,W-200,60,14,fill=1,stroke=0); c.setFillColor(INK); c.setFont("Helvetica-Bold",16); c.drawString(162,y+22,l)
    box(c,55,70,W-110,110,"What might help?  Breathe | Move | Quiet corner | Ask for help",MINT); c.save()

def calm_posters():
    c=base("calm-corner-posters.pdf","Calm Corner Posters","Display these steps where children can see and practise them.")
    steps=[("1. Pause","Stop and notice."),("2. Breathe","In for 4, out for 4."),("3. Ground","Name 3 things you see."),("4. Choose","Move, rest, or ask for help.")]
    for i,(t,d) in enumerate(steps):
        y=H-245-i*125; box(c,55,y,W-110,98,t,[MINT,SKY,HexColor("#FFF8DF"),HexColor("#FFF2EE")][i]); c.setFont("Helvetica",14); c.drawString(75,y+34,d)
    c.save()

def reflection_sheet():
    c=base("behavior-reflection-sheet.pdf","Pause, Reflect, Repair","A shame-free reflection sheet for after everyone is calm.")
    prompts=[("What happened?",115),("What was I feeling in my body?",90),("Who was affected?",80),("What can I try next time?",100),("How can I repair or make things better?",100)]
    y=H-170
    for t,h in prompts: box(c,48,y-h,W-96,h-12,t,HexColor("#FFFFFF")); c.setStrokeColor(HexColor("#DCE7EB")); c.roundRect(48,y-h,W-96,h-12,12,fill=0,stroke=1); y-=h
    c.save()

def routine_cards():
    c=base("classroom-routine-cards.pdf","Classroom Routine Cards","Cut out and arrange these visual prompts in the order your class uses.")
    items=["Arrive & unpack","Morning check-in","Listen","Choose materials","Work time","Movement break","Calm reset","Ask for help","Tidy up","Reflect","Home time","Try again"]
    for i,t in enumerate(items):
        col,row=i%3,i//3; x=35+col*185; y=H-245-row*135
        c.setFillColor([MINT,SKY,HexColor("#FFF8DF")][col]); c.roundRect(x,y,165,108,14,fill=1,stroke=0); c.setFillColor(CORAL); c.circle(x+82,y+72,19,fill=1,stroke=0); c.setFillColor(INK); c.setFont("Helvetica-Bold",12); c.drawCentredString(x+82,y+29,t)
    c.save()

for fn in (emotion_cards, feelings_scale, calm_posters, reflection_sheet, routine_cards): fn()
print(f"Created 5 PDFs in {OUT}")
