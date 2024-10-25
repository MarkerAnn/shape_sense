# Reflektion kring kapitlen 2-11

## Chapter 2

I båda projekten så har jag jobbat hårt med att följa principerna från kapitel 2, när det gäller namngivning. Jag tycker att detta är den del där jag lyckats bäst, även om det fortfarande finns utrymme för förbättringar. För att säkerställa att reglerna följs konsekvent har jag lagt in specifika lint-regler i laboration 3 som varnar när något inte överensstämmer, Detta är såklart något som jag borde göra i Laboration 2 också men tyvärr har jag stridit mot tiden.

Lint-reglerna bygger på rekommendationerna i boken och ser till att variabler, funktioner och klasser får meningsfulla och tydliga namn. Några av de specifika reglerna jag har implementerat är:

- Använda avsiktsförklarande namn (exempelvis `elapsedTimeInDays` istället för `d`). Man får en varning om namnet enbart använder en bokstav. Vid en EventListener så hade jag skrivit (e) men fick varning direkt, vilket är toppen!
- Undvika vilseledande namn och förkortningar som kan förväxlas.
- Hålla namnen sökbara och läsbara för att underlätta kodunderhåll.
- Säkerställa att namn inte är för lika eller förvirrande, exempelvis att undvika namn som `controller` och `manager` för liknande men inte identiska funktioner.

Precis som jag nämnde i min reflektion på Laboration 2 så kämpar jag fortfarande med balansen att inte använda förkortningar men ändå hålla läsbarheten så namnen inte blir för långa. I Laboration 3 har jag inte förkortat BMR exempelvis, men detta har bidragit med längre namn.

Där jag skulle kunna förbättra mig är att vara konsekvent i namngivningen när det kommer till screaming snake case och camelCase, jag jobbar nog fortfarande på att hitta "mitt" sätt och eftersom vi ständigt lär oss nya saker så blir saker man skrivit tidigare lite inkonsekvent, tyvärr.

## Chapter 3

Det är ju det här med små och många funktioner, jag tycker att det är en viss balansgång här också. Blir metoderna för små och för många tycker jag nästan att det kan bli rörigt i koden. Men jag ser definitivt en utveckling efter den här kursen. I min L3 så har jag endast 4 metoder som överskrider 20 rader. Jag har dock kört hårt på 80`*` tecken horisontalt, vilket bidrar till att raderna blir fler. Nu när jag har suttit och reflekterat så inser jag att jag kanske borde öka 80 i linjelängd med tanke på att skärmarna i regel är bredare idag?!
När det kommer till argument så har jag även lagt in detta i min lint som godkänner max 3. Men jag är medveten om att boken förespråkar 0-2. Som jag skrev i förra reflektionen så tänker jag "objekt" direkt när jag ser att jag är på väg att lägga in många argument.
Det finns fortfarande mycket att jobba på här för mig, framförallt att få ner funktionerna ytterligare så att dessa bara gör en sak.

`*` - Regeln är dock åsidosatt vid importer. För att skapa bra namngivning och en bra mappstruktur blev importnamnen väldigt långa

## Chapter 4

Dessa kommentarer, och jag som är allt eller inget! Från att ha kommenterat precis överallt till att knappt kommentera något alls. Jag tror bara jag har en inline-kommentar i min L3. Däremot så använder jag JSDoc. Men där jag har klasser som ärver så använder jag mig av `@inheritdoc` vilket gör kommentarerna något kortare. Jag förstår författaren och jag håller med om det mesta. Att inte skapa kommentarer för att komma ifrån att man har skrivit sämre kod. Och följer man bokens rekommendationer med namngivning och dylikt så behöver man faktiskt inte kommentera så mycket. Det blir enklare när man tänker "namnge som du skulle kommenterat". Namngivningen blir i regel bra och man slipper kommentaren "Win-Win". Dessutom så blir kommentarer ännu en sak att underhålla. Jag är dock en flitig användare av TODO-kommentarer under tiden jag utvecklar, men det är ett smidigt när man dessutom använder sig av den extension i VsCode.

## Chapter 5

Formatering, här pratar författaren om att formatering är en kommunikationsfråga och hur kodförståelsen ökar med en konsekvent formatering. Vilket jag håller med om till 110%.
Eftersom jag följer en kodstandard och lagt till egna regler så är min kod konsekvent formaterad. Dock har jag inte hunnit uppdatera L2 till de nya reglerna jag lagt in, men den följer samma grund. Jag har också lagt in en fil om kodstandarden till eventuell contributors för att de ska följa samma standard.
Något jag absolut inte är nöjd med är formateringen i mina templates med HTML. Här la jag ner alldeles för lite tid och skalade bara av radlängden utan någon närmare eftertanke, så här skäms jag lite.
När det kommer till indentering så använder jag 2 mellanslag. Jag har inte överskridit 5 indenteringar i någon metod, detta är något jag bör minska ännu mer i framtiden eftersom det dessutom minskar komplexiteten i metoderna avsevärt. Min linjebrädd är, som jag nämnde ovan, på 80 tecken. som boken förespråkar men jag tror ändå att jag skulle kunna höja den lite, man kanske till och med ökar läsförståelsen på det sättet idag?

## Chapter 6

Detta har nog varit ett av de svåraste kapitlen att greppa, jag har set föreläsningen flera gånger och fått läsa om mer än 2 gånger. Men ändå har jag svårt att få grepp om det. Men som jag har förstått det så döljer objekt sin data och exponerar sitt beteende genom funktioner. Datastrukturer exponerar sin data men har inget beteende. En bra praxis är att inte lägga setters/getters på allting eftersom det exponerar implementationen. Och Law of Demeter handlar om att en metod bara ska prata med sina "vänner" och inte "främlingar". På det sättet undviker man "tågen".
Jag har blandat ihop dessa koncepten ser jag när jag analyserar min kod. Jag har fullt av "hybrider". Jag kan ärligt talat säga att om jag skulle skriva om mina laborationer så skulle jag garanterat skapa nya hybrider, så osäker är jag på just denna biten, men förhoppningsvis skulle dessa bli färre med tiden. Jag har också svårt att se hur jag skulle kunna undvika det när man följer MVC-pattern?
Bara ett av tusen exempel:

```javascript
export class BmiController extends BaseController {
  protected view: BmiView;
  private user: UserModel;
  private calculator: HealthCalculatorModel;

  protected handleCalculate(formData: FormData): void {
    try {
      const data = this.parseFormData(formData);
      this.formValidator.validateIBmiFormData(data);
      this.user.setData(data);
      this.updateView();
      this.view.hideError();
    } catch (error) {
      this.handleErrors(error as Error);
    }
  }
}
```

Detta är dock inte hela min BmiController men om jag har förstått det rätt visar den exempel på att vara en "hybrid". Eftersom den blandar olika sätt att använda objekt och datastrukturer. Det gör koden svårare att förstå och mer komplicerad. Det kan leda till problem när man vill uppdatera koden eller lägga till nya funktioner och typer i framtiden.
Jag borde reflektera ännu mer och vara medveten om vad varje klass ska vara redan vid designen. För att avgöra om det ska vara ett rent objekt eller en ren datastruktur

## Chapter 7

Felhantering är också en sak som jag inte riktigt reflekterat över innan denna kursen. Jag har gjort som jag har blivit lärd och inte riktigt spenderat så mycket mer tid på hur jag har gjort det. Vilket har bidragit till att jag kan utvecklas betydligt mer på detta. I min kod så kastar jag visserligen undantag vissa ställen vilket är korrekt, jag anpassar meddelandet till vilket typ av fel det är men i L3 kastar jag enbart "error", dessa skulle kunna anpassas ännu mer till vilket fel som inträffar. Eftersom L3 är en webbapplikation så skulle jag också ha implementerat loggning för utveckla felhanteringen ännu mer.

På flera ställen så returnerar jag null, jag borde implementera betydligt fler try-catch satser. Här är ett exempel från min L2 som bryter mot regler:

```JavaScript
function validateAge(user: User) {
  if (user.age === undefined) {
    return
  }
  if (user.age < 18) {
    console.warn(`Warning: health calculation might not be accurate...`)
  }
}
```

Detta är visserligen enda stället jag använder `console.warn` men det bryter mot bokens regler. Anledningen till det var att modulen skulle fungera till alla åldrar men man skulle ändå få någon typ av varning som utvecklare.
Nu vid analys så skulle jag kunna göra något sånt här:

```JavaScript
function validateAge(user: User) {
  if (user.age === undefined) {
    throw new Error('User age is undefined')
  }
  if (user.age < 18) {
    throw new Error('Age is below 18; health calculation might not be accurate')
  }
}

```

Jag kastar undantag med tydliga meddelanden. Istället för att tyst ignorera ett problem.

Här är ytterligare ett exempel, tyvärr ett väldigt vanligt sådant i L3

```JavaScript
updateResults(data: IFormattedBmiResults): void {
if (!this.resultsTable) return

const rows = this.resultsTable.rows
rows[0].cells[1].textContent = data.bmi
rows[1].cells[1].textContent = data.category
rows[2].cells[1].textContent = data.healthRisk
rows[3].cells[1].textContent = data.idealWeight
}
```

Även här skäms jag lite över att visa upp felhanteringen och dessa finns överallt i min kod. Hade jag haft mer tid så hade jag ändrat alla dessa så de följer nedanstående mönster:

```JavaScript
updateResults(data: IFormattedBmiResults): void {
    if (!this.resultsTable) {
        throw new Error('Results table is not initialized')
    }

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.bmi
    rows[1].cells[1].textContent = data.category
    rows[2].cells[1].textContent = data.healthRisk
    rows[3].cells[1].textContent = data.idealWeight
}
```

Nackdelen är att jag reflekterade över detta försent, fördelen är att jag känner till fler av mina brister i koden nu och kan förbättra mig.

## Chapter 8

Här handlar kapitlet handlar om hur man hanterar gränser mellan min egen kod och tredjepartskod eller kod från andra team. Huvudpoängen är att man bör skapa tydliga gränser och abstraktioner för att skydda min egen kod från förändringar i externa beroenden. En centrla rekommendation är att inte exponera tredjepartskod direkt genom hela systemet, utan istället kapsla in den bakom definierade gränssnitt som vi kontrollerar.
Detta var faktiskt något jag hade med mig när jag utvecklade L3, jag skapade därför en adapter som går mellan min kod och min modul. Denna separerar "tredjepartskoden" från min webbapplikation.
För mig dök även ett nytt begrepp upp i detta kapitlet learning tests. Det är inget jag hört innan. Om jag har förstått det hela rätt så handlar det om att förstå hur en extern komponent fungerar innan man lägger in det i sin kod. Och då kan man även säkerställa att det inte kommer skada min kod. vilket låter klokt.

## Chapter 9

Enhetstester, något jag ser fram emot att lära mig mer om. Jag implemtenterade dessa i L2 men tyvärr fanns inte tiden i L3 och eftersom det är en webbapplikation så hade det tagit lite mer tid för mig. Men det är en fröjd att utveckla när dessa finns, att man kan ändra saker och snabbt kontrollera om det påverkar annat i koden. Att det kan generera en testrapport som andra enkelt kan ta del av, det är fantastiskt.
Kapitlet betonar dock vikten av välskrivna tester som en kritisk del av kodbasen. Jag är nybörjare och lärt mig det jag läst, så det finns säkert mängder av saker jag har gjort fel. Men jag har försökt lägga in en bra läsbarhet i testerna med en logisk struktur

```JavaScript
it('should calculate correct BMI for normal weight male', () => {
  const user = testUsers.normalWeightMaleMetric;
  healthCalculator = HealthCalculatorFactory.createHealthCalculator(user);

  const bmi = healthCalculator.getBmi();
  expect(bmi).toBeCloseTo(22.86, 2);

  const bmiType = healthCalculator.getBmiType();
  expect(bmiType).toBe('normal weight');
});
```

Jag skapade också en en separat testData.ts med fördefinierade testanvändare, som följer bokens princip.

Sen finns det tester som är mindre trevliga att se på:

```JavaScript
it('should calculate correct TDEE for normal weight male (metric) with moderate activity', () => {
  const user = testUsers.normalWeightMaleMetric;
  const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user);
  const bmr = healthCalculator.getBmrHarrisBenedict();
  const tdee = healthCalculator.getTdeeHarrisBenedict();
  expect(tdee).toBeCloseTo(bmr * 1.55, 2);
});
```

Här kombinerar jag tester, vilket boken inte förespråkar.
Jag skulle också haft en större coverage och varit mer konsekvent. I mina BMI tester så testar jag genom mitt interface, men i mina andra tester så testar jag direkt mot HealthCalculator.
I projektkursen provade jag konceptet med TDD och det var något jag uppdkattade, tyvärr så visste jag inte hur mycket tid allting skulle ta med L2 så jag vågade inte prioritera testerna på det sättet, tyvärr. Men det är något som boken tar upp. Den tar även upp F.I.R.S.T, Fast, Independent, Repeatable, Self-Validating, Timely. Vilket alla låter väldigt rimliga!
Jag förstår fördelarna med enhetstester, och jag förstår hur dessa kan bidra till att skapa robust kod.

## Chapter 10

Klasser, dessa klasser!
Dessa ska vara små och många med ett enda ansvarsområde (Single Responsibility Principle). Jag har verkligen försökt jobba på att hålla dessa så små som möjligt, men samtidigt behålla MVC-mönstret. Kapitlet tar också upp vikten av inkapsling, kohesion (hur väl metoderna använder klassens variabler) och att klasser ska vara öppna för utökning men stängda för modifiering (Open-Closed Principle). Ett annat koncept är Dependency Inversion Principle som säger att klasser ska vara beroende av abstraktioner snarare än konkreta implementationer. Kapitlet förklarar att klasser ska vara välorganiserade först variabler, sen publika metoder, följt av de privata metoderna som de använder. Detta är något jag försökt följa.

Exempel från min modul:

```JavaScript
// Varje calculator har ett tydligt ansvar
export class BmiCalculator implements InterfaceBmiCalculator {
  private calculateBmi(user: User): number {
    // Bara BMI-beräkningar här
  }

  private calculateBmiType(bmi: number): string {
    // Bara BMI-kategorisering här
  }
}
```

Exempel från min Webbapplikation:

```JavaScript
export class BmiView {
  // Först privata variabler
  private form: HTMLFormElement | null = null;
  private resultsTable: HTMLTableElement | null = null;

  // Sen publika metoder
  public render(container: HTMLElement): void {
    // Rendering
  }

  // Sen privata hjälpmetoder
  private formatResults(data: BmiData): void {
    // Formattering
  }
}
```

Något jag inte tänkt på förrän din föreläsning är att också ha metoder som tillhör varandra nära. jag lägger fortfarande mina private metoder längst ner men jag har reflekterat mer över var dessa kommer i ordningen nu i L3
Jag har fortfarande många förbättringsområden även här. jag måste jobba ner så klasserna blir ännu mindre och ännu bättre på att enbart göra en sak. Jag har blivit betydligt bättre på att använda interfaces i denna kursen men det finns gott om utrymme fö förbättring där också. Jag förstår att koden blir så mycket enklare att förstå och följa, även att navigera i om man låter klasserna vara mindre. Jag måste tänka på att identifiera och separera de olika ansvarsområdena tidigare i designprocessen.

## Chapter 11

Kapitlet handlar om hur man bygger och hanterar system på ett snyggt/rent sätt och även skalbart. Att man ska hålla isär konstruktionen och användningen av systemet genom exempelvis dependency injection.
Utan att ha vetat om det så har jag alltid kört "Big Design Up Front" och det var en ordentlig "Aha-upplevelse" när jag läste om detta. Tyvärr läste jag om det försent, då hade jag redan påbörjat L3. Men allts om boken varnar för när man kör igång på det sättet stämmer, den psykologiska barriären och risken att fastna i en överarbetad och stelbent arkitektur som inte är så flexibel. Kapitlet tar upp att man kanske istället ska fokusera på att implementera det som behövs här och nu "Todays stories" och sen refaktorera och bygga ut systemet gradvis. Precis som det agila arbetssättet. Det är något jag kommer jobba på. Som jag måste jobba på, för att kunna skapa bättre system.
Något jag faktiskt har följt enligt kapitlet är att jag har factory-pattern, både i L2 och L3.

I L2:

```JavaScript
// Factory som hanterar konstruktion
export class HealthCalculatorFactory {
  static createHealthCalculator(user: User): InterfaceHealthCalculator {
    validateUserInput(user)
    const userCopy = copyUser(user)
    const metricUser = convertUserToMetric(userCopy)

    return new HealthCalculator(
      metricUser,
      new BmiCalculator(),
      new BodyCompositionCalculator()
    )
  }
}

// Ren användning utan att veta om konstruktionen
const calculator = HealthCalculatorFactory.createHealthCalculator(user);
const bmi = calculator.getBmi();
```

I L3

```JavaScript
export class BmiController {
  constructor(
    private readonly validator: IValidator,
    private readonly calculator: ICalculator,
    private readonly view: IView,
    private readonly storage: IStorage
  ) {}

  // Kan nu enkelt byta ut implementationer genom injection
}
```

Men däremot så blandar jag användning med konstruktion på andra ställen:

```JavaScript
// Inte bra - klassen skapar sina egna beroenden
export class HealthCalculator
{ private validator = new Validator(); // Hårdkodat beroende
private converter = new UnitConverter(); // Hårdkodat beroende

constructor(private user: User) { // Borde få dependencies injicerade istället
	}
}
```

Dependency injection, jag använder det flitigt men borde använda det mer, här är ett exempel på något jag skulle behöva ändra i L3

```JavaScript
public class ControllerFactory {
  private readonly formValidator: IFormValidator

  constructor(private readonly user: UserModel,
             private readonly calculator: HealthCalculatorModel) {
    this.formValidator = new FormValidatorService() // Bör injiceras
  }
```

## Sammanfattningsvis

Denna uppgiften var tuff tidsmässigt, jag trodde aldrig jag skulle hinna men tillslut så blev den färdig. Det är dock på bekostnad av mycket, det finns så många brister i min kodkvalitet och de jag har tagit med ovan är ju bara ett axplock. Att lämna in något man inte är riktigt stolt över känns, men jag antar att det är det man får göra ibland. En stor utmaning är fortfarande att förstå sig på det objektorienterade konceptet, hur allt ska hänga ihop på bästa sätt utan att läcka för mycket information Jag är medveten om att jag har mycket att jobba på när det kommer till att skriva Clean Code men det är något jag _vill_ bli bättre på så äventyret till lärdom känns ändå roligt.
