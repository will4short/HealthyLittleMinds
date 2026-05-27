from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from reportlab.graphics.barcode import qrencoder


URL = "https://www.healthylittleminds.club/about_me.html"
INK = "#163A52"


def build_matrix():
    qr = qrencoder.QRCode(None, qrencoder.QRErrorCorrectLevel.H)
    qr.addData(URL)
    qr.make()
    return qr.modules


def save_plain_png(matrix, file_path, scale=20, border=4):
    count = len(matrix)
    size = (count + border * 2) * scale
    image = Image.new("RGB", (size, size), "white")
    draw = ImageDraw.Draw(image)
    for y, row in enumerate(matrix):
        for x, dark in enumerate(row):
            if dark:
                left = (x + border) * scale
                top = (y + border) * scale
                draw.rectangle((left, top, left + scale - 1, top + scale - 1), fill=INK)
    image.save(file_path)
    return image


def save_svg(matrix, file_path, border=4):
    count = len(matrix)
    size = count + border * 2
    cells = []
    for y, row in enumerate(matrix):
        for x, dark in enumerate(row):
            if dark:
                cells.append(f"M{x + border},{y + border}h1v1h-1z")
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" '
        f'shape-rendering="crispEdges" aria-label="QR code for Godswill Ambrose profile">'
        f'<rect width="{size}" height="{size}" fill="#ffffff"/>'
        f'<path d="{"".join(cells)}" fill="{INK}"/></svg>'
    )
    file_path.write_text(svg, encoding="utf-8")


def font(size, bold=False):
    options = (
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    )
    for option in options:
        if Path(option).exists():
            return ImageFont.truetype(option, size)
    return ImageFont.load_default()


def save_share_card(plain_image, file_path):
    card = Image.new("RGB", (1400, 1760), "#F4FAF8")
    draw = ImageDraw.Draw(card)
    draw.rounded_rectangle((70, 70, 1330, 1690), radius=22, fill="#FFFFFF", outline="#DCE7EB", width=3)
    draw.text((700, 165), "Healthy Little Minds", anchor="mm", fill="#254E70", font=font(52, True))
    draw.text((700, 255), "Meet Godswill Ambrose", anchor="mm", fill=INK, font=font(70, True))
    draw.text((700, 335), "Founder, educator and researcher", anchor="mm", fill="#506873", font=font(34))
    card.paste(plain_image.resize((960, 960), Image.Resampling.NEAREST), (220, 430))
    draw.rounded_rectangle((260, 1455, 1140, 1560), radius=8, fill="#DF6B63")
    draw.text((700, 1507), "Scan to view the About Me page", anchor="mm", fill="#FFFFFF", font=font(34, True))
    draw.text((700, 1620), "healthylittleminds.club/about_me.html", anchor="mm", fill="#506873", font=font(25))
    card.save(file_path, quality=95)


def main():
    root = Path(__file__).resolve().parents[1]
    output = root / "images" / "share"
    output.mkdir(parents=True, exist_ok=True)
    matrix = build_matrix()
    plain = save_plain_png(matrix, output / "about-me-qr.png")
    save_svg(matrix, output / "about-me-qr.svg")
    save_share_card(plain, output / "about-me-qr-share-card.png")
    print(f"Created QR assets for {URL}")
    print(f"Matrix: {len(matrix)} x {len(matrix)} modules, high error correction")


if __name__ == "__main__":
    main()
