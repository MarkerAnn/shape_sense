## Kravspecifikation för webbapplikation

### Funktionella krav

1. **Beräkning av BMI**:

   - Användaren fyller i obligatoriska fält: `weight`, `height`, och väljer `unitSystem` från en rullgardinsmeny.
   - Resultat:
     - BMI, BMI prime och BMI category presenteras.
     - Idealvikt inom ett hälsosamt viktintervall visas.
     - En kort beskrivning om hälsorisker kopplade till BMI och en förklaring av dess begränsningar.
   - Felhantering: Om ogiltiga värden anges för `weight` eller `height` visas ett felmeddelande.
   - Användaren kan välja mellan enhetssystem (`metric` eller `imperial`) via en rullgardinsmeny.

2. **Beräkning av fettfördelningsmått (waist-to-hip och waist-to-height ratio)**:

   - Waist-to-hip ratio: Användaren fyller i `waist`, `hip` och väljer `unitSystem` från en rullgardinsmeny.
   - Waist-to-height ratio: Användaren fyller i `waist`, `height` och väljer `unitSystem` från en rullgardinsmeny.
   - Båda värdena presenteras.
   - Felmeddelanden visas om ogiltiga värden anges.
   - Obligatoriska fält markeras.

3. **Beräkning av kroppsfettprocent**:

   - Användaren fyller i obligatoriska fält: `unitSystem` (rullgardinsmeny), `waist`, `neck` och `gender` (rullgardinsmeny). Om användaren är kvinna tillkommer `hip`.
   - Kroppsfettprocent presenteras i procentform.
   - Felmeddelanden visas om ogiltiga värden anges.
   - Obligatoriska fält markeras.

4. **Beräkning av fettfri massa**:

   - Användaren fyller i obligatoriska fält: `unitSystem` (rullgardinsmeny), `waist`, `neck` och `gender` (rullgardinsmeny)
   - Fettfri massa presenteras.
   - Felmeddelanden visas om ogiltiga värden anges.
   - Obligatoriska fält markeras.

5. **Beräkning av TDEE (Total Daily Energy Expenditure)**:

   - Användaren fyller i obligatoriska fält: `weight`, `height`, `age`, väljer `gender`, `unitSystem` och `activityLevel` från rullgardinsmenyer.
   - TDEE presenteras med både Harris-Benedict och Mifflin-St Jeor formler.
   - Felmeddelanden visas om ogiltiga värden anges.

6. **Beräkning av BMR (Basal Metabolic Rate)**:

   - Användaren fyller i obligatoriska fält: `weight`, `height`, `age`, väljer `gender` och `unitSystem` från rullgardinsmenyer.
   - BMR presenteras med Harris-Benedict och Mifflin-St Jeor formler.
   - Felmeddelanden visas om ogiltiga värden anges.

7. **Beräkning av kalorier för viktmål**:

   - Användaren fyller i obligatoriska fält: `weight`, `height`, `weightGoal`, `weeksToWeightGoal`, `dailyCalories` och väljer `unitSystem` från en rullgardinsmeny.
   - Användaren får presenterat hur många kalorier som ska konsumeras per dag för att nå sitt viktmål.
   - Felmeddelanden visas om ogiltiga värden anges.

8. **Kunskap**:

- Applikationen ska ge användaren kunskap om de olika beräkningarna. Vad BMI står för o.s.v
- Applikationen ska också förklara brister i mätmetoder samt att det finns andra indikationer på bra hälsa än just en siffra

9. **Språk**

- Applikationen ska vara på engelska

### Navigationsstruktur (Routes)

Här är de nya rutterna skrivna på samma sätt som de gamla:

- `/`: Startsidan
- `/bmi`: Sida för BMI-beräkning
- `/bmr`: Sida för att beräkna Basal Metabolic Rate (BMR)
- `/tdee`: Sida för att beräkna Total Daily Energy Expenditure (TDEE)
- `/waist-to-hip`: Sida för att beräkna waist-to-hip ratio
- `/waist-to-height`: Sida för att beräkna waist-to-height ratio
- `/body-fat-percentage`: Sida för att beräkna kroppsfettprocent
- `/calorie-goal`: Sida för kaloriberäkning för kalorimål
- `/weight-goal`: Sida för att beräkna tidsram för viktmål

### Tekniska krav

- Applikationen ska utvecklas med:
  - **Vite** som byggverktyg.
  - **TypeScript** som programmeringsspråk.
  - Applikationen ska hostas via Firebase eller Netlify.
  - Följ strikt **MVC (Model-View-Controller)** för att strukturera applikationen.
  - Koden ska vara **objektorienterad**.

### Säkerhet

- Grundläggande säkerhetsåtgärder ska implementeras för att förhindra typiska sårbarheter som Cross-Site Scripting (XSS).

### Versionskontroll

- Versionshantering ska ske via Git, och en GitHub-repository ska användas för att spåra kodförändringar.

### CI/CD (Continuous Integration/Continuous Deployment)

- Applikationen ska ha en CI/CD-pipeline som automatiskt bygger och deployar applikationen via GitHub Actions.

### Testning

- Applikationen ska testas manuellt.

### Validering och felhantering

- Felmeddelanden ska visas om användaren anger ogiltiga värden i formulärfälten.
- Obligatoriska fält ska vara tydligt markerade.

### Integration med modulen

Applikationen ska integreras med den tidigare skapade modulen som hanterar alla ovan nämnda beräkningar och använder modulens metoder för BMI, kroppsfettprocent, fettfri massa, TDEE, BMR och kaloriberäkningar för viktmål. Applikationen är beroende av modulen, men modulen är fristående.

### Dokumentationskrav

- Dokumentationen ska vara anpassad för olika målgrupper:

  - **Slutanvändare**: Instruktioner för hur appen används, med steg-för-steg och exempel på inmatning och förväntade resultat.
  - **Utvecklare**: Detaljerad information om applikationens struktur, beroenden, och hur den kan vidareutvecklas. Beskrivning av hur modulen integreras är nödvändig.
  - **Examinator**: Sammanfattning av hur projektet uppfyller kraven i laborationen, samt hur Clean Code-principer implementerats.

- Använd en README-fil som huvudsaklig dokumentationskälla med sektioner för installation, användning, tester och framtida utveckling. Andra artefakter som moduler eller beroenden ska även dokumenteras.

### Krav om tid finns

1. **Responsiv design**: Applikationen ska vara fullt responsiv och anpassa sig till olika skärmstorlekar.
2. **Enhetsvalidering**: Om användaren byter enhetssystem ska värden konverteras automatiskt och visas i rätt enhet.
3. **Exportfunktion**: Användaren ska kunna exportera sina resultat som PDF eller CSV.
4. **Resultatsammanfattning**: Efter varje beräkning ska en översiktssida visa alla resultat, inklusive BMI, kroppsfettprocent, fettfri massa och kaloribehov.
5. **SEO**: Grundläggande SEO-strategier ska implementeras för att göra applikationen sökbar.
