from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT=Path(__file__).resolve().parents[1]; W,H=A4
fonts={"zh-tw":r"C:\Windows\Fonts\msjh.ttc","zh-cn":r"C:\Windows\Fonts\msyh.ttc","ja":r"C:\Windows\Fonts\msgothic.ttc","ko":r"C:\Windows\Fonts\malgun.ttf"}
for k,p in fonts.items(): pdfmetrics.registerFont(TTFont("HLM-"+k,p))
INK=HexColor("#254E70"); MINT=HexColor("#E9F6F3"); SKY=HexColor("#F1F8FA"); CORAL=HexColor("#E56F65")
copy={
"zh-tw":{"emotion-cards.pdf":["情緒圖卡",["開心","平靜","擔心","難過","挫折","生氣","害怕","不確定"]],"feelings-scale.pdf":["感受量表",["5 非常強烈","4 壓力很大","3 擔心","2 還好","1 平靜"]],"calm-corner-posters.pdf":["冷靜角海報",["停一停並察覺","吸氣4拍，呼氣4拍","說出看見的三樣東西","選擇：活動、休息或求助"]],"behavior-reflection-sheet.pdf":["行為反思單",["發生了甚麼？","我的身體有甚麼感受？","誰受到影響？","下次我可以怎麼做？","我可以如何修復？"]],"classroom-routine-cards.pdf":["課堂常規卡",["到校與整理","晨間報到","聆聽","工作時間","活動休息","冷靜重整","請求幫助","收拾","反思","回家"]]},
"zh-cn":{"emotion-cards.pdf":["情绪卡",["开心","平静","担心","难过","挫败","生气","害怕","不确定"]],"feelings-scale.pdf":["感受量表",["5 非常强烈","4 压力很大","3 担心","2 还好","1 平静"]],"calm-corner-posters.pdf":["冷静角海报",["停一停并觉察","吸气4拍，呼气4拍","说出看到的三样东西","选择：活动、休息或求助"]],"behavior-reflection-sheet.pdf":["行为反思表",["发生了什么？","我的身体有什么感受？","谁受到影响？","下次我可以怎么做？","我可以如何修复？"]],"classroom-routine-cards.pdf":["课堂常规卡",["到校与整理","晨间签到","倾听","学习时间","活动休息","冷静重整","请求帮助","收拾","反思","回家"]]},
"ja":{"emotion-cards.pdf":["感情カード",["うれしい","落ち着く","心配","悲しい","悔しい","怒り","怖い","わからない"]],"feelings-scale.pdf":["気持ちスケール",["5 とても強い","4 ストレス大","3 心配","2 まあまあ","1 落ち着く"]],"calm-corner-posters.pdf":["クールダウンコーナー",["止まって気づく","4秒吸って4秒吐く","見えるものを3つ言う","動く・休む・助けを求める"]],"behavior-reflection-sheet.pdf":["行動振り返りシート",["何が起きた？","体で何を感じた？","誰に影響した？","次は何を試す？","どう修復できる？"]],"classroom-routine-cards.pdf":["教室ルーティンカード",["登校と準備","朝のチェックイン","聞く","学習時間","運動休憩","落ち着く","助けを求める","片づけ","振り返り","下校"]]},
"ko":{"emotion-cards.pdf":["감정 카드",["기쁨","차분함","걱정","슬픔","답답함","화남","두려움","잘 모르겠음"]],"feelings-scale.pdf":["감정 척도",["5 매우 강함","4 스트레스가 큼","3 걱정됨","2 괜찮음","1 차분함"]],"calm-corner-posters.pdf":["진정 공간 포스터",["멈추고 알아차리기","4초 들이쉬고 4초 내쉬기","보이는 것 세 가지 말하기","움직이기, 쉬기, 도움 요청"]],"behavior-reflection-sheet.pdf":["행동 성찰지",["무슨 일이 있었나요?","몸에서 무엇을 느꼈나요?","누가 영향을 받았나요?","다음에는 무엇을 해볼까요?","어떻게 회복할 수 있나요?"]],"classroom-routine-cards.pdf":["교실 일과 카드",["등교와 정리","아침 체크인","듣기","학습 시간","움직임 휴식","진정하기","도움 요청","정리","돌아보기","하교"]]}}

for locale,docs in copy.items():
 out=ROOT/"worksheets"/"teacher-toolbox"/locale; out.mkdir(parents=True,exist_ok=True); f="HLM-"+locale
 for filename,(title,items) in docs.items():
  c=canvas.Canvas(str(out/filename),pagesize=A4); c.setTitle(title); c.setFillColor(MINT); c.roundRect(30,H-115,W-60,78,18,fill=1,stroke=0); c.setFillColor(INK); c.setFont(f,22); c.drawString(50,H-78,title)
  cols=2 if len(items)>5 else 1; cardw=(W-120)/cols; rows=(len(items)+cols-1)//cols
  for i,text in enumerate(items):
   col=i%cols; row=i//cols; x=45+col*(cardw+30); y=H-175-row*(560/max(rows,1)); h=min(90,500/max(rows,1)); c.setFillColor(SKY if i%2 else HexColor("#FFF8EF")); c.roundRect(x,y-h,cardw,h-8,12,fill=1,stroke=0); c.setFillColor(CORAL); c.circle(x+28,y-h/2-4,13,fill=1,stroke=0); c.setFillColor(INK); c.setFont(f,11); c.drawString(x+50,y-h/2-8,text)
  c.setFillColor(HexColor("#708793")); c.setFont(f,7); c.drawRightString(W-35,20,"Healthy Little Minds"); c.save()
print("Created 20 localized PDFs")
