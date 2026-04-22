from deep_translator import GoogleTranslator
import json

# texto = GoogleTranslator(source='pt', target='en').translate("Olá, tudo bem?")
# print(texto)

with open('assets/reasons.json', 'r', encoding='utf-8') as file:
    reasons = json.load(file)

result = []

for reason in reasons:
    translate = GoogleTranslator(source='pt', target='en').translate(reason)
    result.append(reason)

with open('assets/reason_pt.json', 'w', encoding='utf-8') as file:
    json.dump(result, file, ensure_ascii=False, indent=4)