import glob
import os
import re

root = os.path.join(os.getcwd(), 'ja', 'resources')
files = sorted(glob.glob(os.path.join(root, '*.html')))
print('FILES', len(files))
for path in files:
    slug = os.path.splitext(os.path.basename(path))[0]
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    if '<body class="topic-page' not in content:
        content = re.sub(r'<body>', f'<body class="topic-page topic-page--{slug}">', content, count=1)
    if 'resource-polish.css' not in content:
        content = re.sub(
            r'(href="https://fonts.googleapis.com/css2\?family=DM\+Sans[^\n]*" rel="stylesheet">)',
            r'\1\n  <link href="../../resources/resource-polish.css?v=4" rel="stylesheet" />',
            content,
            count=1,
        )
    if '<div class="resource-toolbar">' not in content:
        toolbar = (
            '\n    <div class="resource-toolbar">\n'
            '      <a href="../home.html#hlm-topics-title">← すべてのトピック</a>\n'
            '      <span class="resource-reading">実用ガイド・3分で読めます</span>\n'
            '    </div>\n'
        )
        content = re.sub(r'(<div class="topic-wrap">\s*\n)', r'\1' + toolbar, content, count=1)
    localized = f'https://www.healthylittleminds.club/ja/resources/{slug}.html'
    content = re.sub(
        r'<link rel="canonical" href="https://www.healthylittleminds.club/[^">]*"',
        f'<link rel="canonical" href="{localized}"',
        content,
    )
    content = re.sub(
        r'<meta property="og:url" content="https://www.healthylittleminds.club/[^">]*"',
        f'<meta property="og:url" content="{localized}"',
        content,
    )
    if 'twitter:url' not in content:
        content = re.sub(
            r'(<meta property="og:url" content="[^"]*"\s*/?>\s*)',
            r'\1<meta name="twitter:url" content="' + localized + '" />\n',
            content,
            count=1,
        )
    content = re.sub(
        r'"url":"https://www.healthylittleminds.club/resources/([^"]+)"',
        r'"url":"https://www.healthylittleminds.club/ja/resources/\1"',
        content,
    )
    content = re.sub(
        r'"item":"https://www.healthylittleminds.club/resources/index.html"',
        '"item":"https://www.healthylittleminds.club/ja/home.html#resources"',
        content,
    )
    content = re.sub(
        r'"item":"https://www.healthylittleminds.club/home.html#resources"',
        '"item":"https://www.healthylittleminds.club/ja/home.html#resources"',
        content,
    )
    content = re.sub(
        r'"item":"https://www.healthylittleminds.club/home.html"',
        '"item":"https://www.healthylittleminds.club/ja/home.html"',
        content,
    )
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated', os.path.basename(path))
    else:
        print('No change', os.path.basename(path))
