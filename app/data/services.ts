import type { LocalizedString } from "../i18n/translations";

/** AZ source text; EN falls back to AZ when omitted. */
const L = (az: string, en = az): LocalizedString => ({ az, en });

export type ServiceStep = {
  title: LocalizedString;
  description: LocalizedString;
};

export type ServiceDetail = {
  id: string;
  title: LocalizedString;
  desc: LocalizedString;
  whatIs: LocalizedString;
  whyImportant: LocalizedString;
  howItWorks: ServiceStep[];
  benefits: LocalizedString[];
  forWho: LocalizedString;
  conclusion: LocalizedString;
};

export type Service = {
  id: string;
  color: string;
  title: LocalizedString;
  desc: LocalizedString;
  items: ServiceDetail[];
};

export const services: Service[] = [
  {
    id: "erp-crm",
    color: "#6B5CE0",
    title: { az: "ERP", en: "ERP" },
    desc: { az: `Biznesinizi idarə etmək üçün güclü və effektiv ERP sistemləri. Maliyyə, inventar, insan resursları və daha çox modullar.`, en: `Powerful ERP systems to run your business. Finance, inventory, HR and more modules.` },
    items: [
      {
        id: "erp-crm-1",
        title: L(`ERP Sistemlərinin Qurulması və Uyğunlaşdırılması`),
        desc: L(`Şirkətin daxili proseslərinə uyğun vahid idarəetmə sisteminin qurulması və adaptasiyası.`),
        whatIs: L(`ERP (Enterprise Resource Planning) sistemləri — şirkətin bütün əsas əməliyyatlarını vahid platformada birləşdirən və biznesin mərkəzləşdirilmiş şəkildə idarə olunmasını təmin edən proqram həlləridir. ERP Sistemlərinin Qurulması və Uyğunlaşdırılması xidməti şirkətin mövcud iş proseslərini analiz etməyi, uyğun ERP strukturunu qurmağı, sistemi biznesin real ehtiyaclarına uyğunlaşdırmağı, işçi heyətinin istifadəsinə hazır hala gətirməyi əhatə edən kompleks yanaşmadır. Bu xidmət hazır proqram quraşdırmaq deyil — biznesə uyğun sistem qurmaqdır.`),
        whyImportant: L(`Biznes böyüdükcə məlumatlar Excel fayllarında dağılır, şöbələr arasında əlaqə zəifləyir, hesabatlar gecikir, səhvlər və uyğunsuzluqlar artır, rəhbərlik real vəziyyəti tam görə bilmir. Bu mərhələdə ERP sistemi biznes üçün zərurətə çevrilir. ERP məlumatı mərkəzləşdirir, prosesləri standartlaşdırır, nəzarəti gücləndirir, qərarverməni sürətləndirir.`),
        howItWorks: [
          {
            title: L(`1. Proseslərin mərkəzləşdirilmiş idarə olunması`),
            description: L(`ERP satış, maliyyə, anbar, insan resursları, hesabat kimi bütün əsas funksiyaları vahid sistemdə birləşdirir. Bu, biznesin idarə olunmasını sadələşdirir və şəffaf edir.`),
          },
          {
            title: L(`2. Zamana qənaət və əməliyyat sürəti`),
            description: L(`Manual proseslər vaxt aparır, səhv riskini artırır. ERP isə məlumatları avtomatik yeniləyir, hesabatları bir neçə saniyəyə təqdim edir, təkrar əməliyyatları aradan qaldırır. Bu, zamana qənaət etmək və iş sürətini artırmaq deməkdir.`),
          },
          {
            title: L(`3. Səhvlərin və itkilərin azalması`),
            description: L(`ERP ikiqat məlumat daxil edilməsini aradan qaldırır, yanlış hesablamaları minimuma endirir, maliyyə və stok fərqlərini azaldır. Bu isə birbaşa maddi itkilərin qarşısını alır.`),
          },
          {
            title: L(`4. Rəhbərlik üçün real vaxtda nəzarət`),
            description: L(`ERP sistemləri rəhbərliyə real vaxtda hesabatlar, analitik göstəricilər, risk xəbərdarlıqları təqdim edir. Bu, qərarverməni təxminə yox, faktlara əsaslanan prosesə çevirir.`),
          },
          {
            title: L(`5. Biznesin böyüməsinə hazır struktur`),
            description: L(`ERP sistemi yeni şöbələrin, filialların, məhsul və xidmətlərin asanlıqla əlavə olunmasına imkan yaradır. Bu da biznesin miqyaslanmasını problemsiz edir.`),
          },
        ],
        benefits: [
          L(`Bütün biznes proseslərinin tək sistemdə birləşdirilməsi`),
          L(`Əl ilə görülən işlərin minimuma endirilməsi`),
          L(`Məlumatları mərkəzləşdirərək idarə olunması`),
          L(`Proseslərdə şəffaflıq və nəzarətin artması`),
          L(`Operativ və düzgün qərarvermə imkanı`),
        ],
        forWho: L(`ERP həlləri xüsusilə orta və böyük bizneslər, istehsal və ticarət şirkətləri, anbar və logistika ilə işləyənlər, çoxşöbəli strukturu olan müəssisələr, sürətlə böyüyən şirkətlər üçün idealdır. Əgər biznesiniz artıq Excel-in imkanlarını aşırsa, bu ERP üçün açıq siqnaldır.`),
        conclusion: L(`Yanlış qurulan ERP işçiləri yorar, prosesi çətinləşdirər, sistemə müqavimət yaradar. Düzgün qurulmuş və uyğunlaşdırılmış ERP isə biznesi sistemləşdirir, xərcləri azaldır, nəzarəti gücləndirir, böyüməni sürətləndirir.`),
      },
      {
        id: "erp-crm-2",
        title: L(`Maliyyə və Mühasibatlıq ERP Modulu`),
        desc: L(`Şirkətin maliyyə axınlarını və mühasibat əməliyyatlarını avtomatlaşdıran ERP həlli.`),
        whatIs: L(`Maliyyə və Mühasibatlıq ERP Modulu — şirkətin bütün maliyyə əməliyyatlarını, mühasibat uçotunu, xərcləri, gəlirləri və hesabatları vahid, mərkəzləşdirilmiş sistem üzərindən idarə etməyə imkan verən ERP həllidir. Bu modul gündəlik maliyyə əməliyyatlarını avtomatlaşdırır, mühasibat uçotunu sistemli və şəffaf edir, rəhbərliyə real vaxtda maliyyə vəziyyətini göstərir. Yəni bu modul sadəcə "hesab aparmaq" üçün yox, biznesin maliyyə sağlamlığını qorumaq və inkişaf etdirmək üçün qurulur.`),
        whyImportant: L(`Biznes böyüdükcə maliyyə idarəetməsi daha da çətinləşir. Ən çox rast gəlinən problemlər: gəlir və xərclərin gec hesablama ilə görünməsi, Excel fayllarında dağınıq mühasibat uçotu, yanlış və gecikmiş hesabatlar, insan faktorundan yaranan səhvlər, rəhbərliyin real maliyyə vəziyyətini anında görə bilməməsi. Bu mərhələdə Maliyyə və Mühasibatlıq ERP Modulu zəruri alətə çevrilir.`),
        howItWorks: [
          {
            title: L(`1. Real vaxtda maliyyə nəzarəti`),
            description: L(`Rəhbərlik cari gəliri, xərcləri, mənfəəti istənilən anda görə bilir. Bu, qərarverməni gecikmədən və faktlara əsaslanaraq aparmağa imkan yaradır.`),
          },
          {
            title: L(`2. Zamana qənaət və əməliyyatların sürətlənməsi`),
            description: L(`Manual mühasibat uçotu vaxt aparır, səhv ehtimalını artırır. ERP Modulu isə hesablamaları avtomatik edir, hesabatları saniyələr içində təqdim edir, təkrar əməliyyatları aradan qaldırır. Bu, zamana qənaət etmək və əməliyyat səmərəliliyini artırmaq deməkdir.`),
          },
          {
            title: L(`3. Səhvlərin və maliyyə risklərinin azalması`),
            description: L(`ERP sistemi məlumatları avtomatik yoxlayır, uyğunsuzluqları erkən mərhələdə göstərir, ikiqat və yanlış qeydlərin qarşısını alır. Bu isə maliyyə itkilərinin və audit risklərinin azalması deməkdir.`),
          },
          {
            title: L(`4. Şəffaflıq və auditə hazır sistem`),
            description: L(`ERP Modulu bütün əməliyyatları qeyd edir, tarixçə saxlayır, audit və yoxlama proseslərini asanlaşdırır. Bu, həm daxili nəzarət, həm də xarici audit üçün böyük üstünlükdür.`),
          },
          {
            title: L(`5. Biznesin böyüməsinə uyğun maliyyə strukturu`),
            description: L(`Şirkət böyüdükcə əməliyyat sayı artır, maliyyə axını mürəkkəbləşir. ERP Modulu isə yeni filialların, yeni layihələrin, artan əməliyyatların asanlıqla idarə olunmasına imkan verir.`),
          },
        ],
        benefits: [
          L(`Gəlir və xərclərin real vaxtda izlənməsi`),
          L(`Maliyyə hesabatlarının avtomatik formalaşdırılması`),
          L(`İnsan səhvlərinin azalması`),
          L(`Büdcə planlamasının asanlaşması`),
          L(`Maliyyə intizamının gücləndirilməsi`),
        ],
        forWho: L(`Bu modul orta və böyük şirkətlər, sürətlə böyüyən bizneslər, çoxfiliallı strukturlar üçün idealdır.`),
        conclusion: L(`Bu modul sizə daha dəqiq maliyyə nəzarəti, daha az səhv, daha sürətli hesabatlar, daha şəffaf mühasibatlıq, daha sağlam qərarvermə qazandırır. Düzgün qurulmuş Maliyyə və Mühasibatlıq ERP Modulu biznesin dayanıqlı inkişafının əsas sütunlarından biridir.`),
      },
      {
        id: "erp-crm-3",
        title: L(`Anbar və Stok İdarəetmə Sistemi`),
        desc: L(`Məhsul və materialların hərəkətini dəqiq və avtomatik idarə edən ERP modulu.`),
        whatIs: L(`Anbar və Stok İdarəetmə Sistemi — şirkətin məhsul hərəkətlərini, anbar qalığını, giriş-çıxış əməliyyatlarını və stok dövriyyəsini vahid və mərkəzləşdirilmiş platforma üzərindən real vaxtda idarə etməyə imkan verən proqram həllidir. Bu sistem hansı məhsulun harada olduğunu, neçə ədəd qaldığını, nə vaxt tükənəcəyini, hansı məhsulun artıq yığıldığını dəqiq və şəffaf şəkildə göstərir. Sadə desək, bu sistem stokla bağlı qeyri-müəyyənliyi aradan qaldırır.`),
        whyImportant: L(`Bir çox şirkətdə stok idarəetməsi hələ də Excel faylları, əl ilə qeydlər, gec yenilənən məlumatlar üzərindən aparılır. Bu isə stok fərqləri və uyğunsuzluqlar, artıq və ya çatışmayan məhsullar, satış zamanı "stokda var" deyilib əslində olmaması, anbarda lazımsız məhsul yığılması, maddi itkilər və planlama səhvləri kimi problemlərə səbəb olur. Anbar və Stok İdarəetmə Sistemi bu riskləri minimuma endirmək üçün qurulur.`),
        howItWorks: [
          {
            title: L(`1. Real vaxtda stok nəzarəti`),
            description: L(`Sistem bütün məhsul giriş-çıxışlarını anında qeyd edir, anbar qalığını real vaxtda göstərir. Bu, satış və satınalma qərarlarını təxminə yox, faktlara əsaslandırır.`),
          },
          {
            title: L(`2. Artıq və çatışmayan stokun qarşısının alınması`),
            description: L(`Sistem artıq yığılan məhsulları göstərir, kritik səviyyədən aşağı düşən stoklar üçün xəbərdarlıq verir. Bu isə artıq stok xərclərini azaldır, satış itkisini minimuma endirir.`),
          },
          {
            title: L(`3. Satış və anbar arasında tam uyğunluq`),
            description: L(`Satış sistemi ilə inteqrasiya sayəsində satılan məhsul avtomatik stokdan düşür, "ikiqat satış" və ya "olmayan məhsulun satışı" riski aradan qalxır. Bu, müştəri məmnuniyyətini və brend etibarını qoruyur.`),
          },
          {
            title: L(`4. Zamana qənaət və əməliyyat səmərəliliyi`),
            description: L(`Manual stok uçotu vaxt aparır, işçi yükünü artırır. Avtomatlaşdırılmış sistem isə prosesləri sürətləndirir, əməliyyat xərclərini azaldır, işçi xərclərinin azalmasına töhfə verir.`),
          },
          {
            title: L(`5. Dəqiq və aydın hesabatlar`),
            description: L(`Sistem stok dövriyyəsini, məhsul üzrə satış sürətini, anbar performansını aydın hesabatlarla təqdim edir. Bu, rəhbərliyə strateji planlama üçün güclü alət verir.`),
          },
        ],
        benefits: [
          L(`Stokların real vaxtda izlənməsi`),
          L(`Artıq və ya çatışmayan məhsul riskinin azalması`),
          L(`Anbar əməliyyatlarının sürətlənməsi`),
          L(`Satış və tədarük proseslərinin optimallaşdırılması`),
          L(`Xərclərə nəzarətin güclənməsi`),
        ],
        forWho: L(`Bu sistem xüsusilə ticarət və distribusiya şirkətləri, istehsal müəssisələri, onlayn mağazalar, çoxsaylı məhsul çeşidi olan bizneslər, sürətlə böyüyən şirkətlər üçün vacibdir. Əgər biznesinizdə stok qarışıqlığı varsa, satışla anbar arasında uyğunsuzluq yaşanırsa, məhsul itkisi baş verirsə, bu sistem zərurətə çevrilib.`),
        conclusion: L(`Stok nəzarətsizdirsə satış itirilir, xərclər artır, planlama çətinləşir. Düzgün qurulmuş Anbar və Stok İdarəetmə Sistemi isə satış itkilərini azaldır, xərcləri optimallaşdırır, biznesi daha idarəolunan edir.`),
      },
      {
        id: "erp-crm-4",
        title: L(`Satış və Müştəri İdarəetmə ERP Modulu`),
        desc: L(`Müştərilərlə əlaqələri və satış proseslərini sistemli şəkildə idarə edən həll.`),
        whatIs: L(`Satış və Müştəri İdarəetmə ERP Modulu — şirkətin bütün satış proseslərini, müştəri məlumatlarını və satış sonrası əlaqələri vahid sistem üzərindən idarə etməyə imkan verən ERP həllidir. Bu modul potensial müştərilərin qeydiyyatını, aktiv satış proseslərini, mövcud müştərilərlə əlaqəni, satış nəticələrinin analizini mərkəzləşdirilmiş və nəzarətli şəkildə həyata keçirir. Sadə desək, bu modul satışı təsadüfdən çıxarıb sistemə çevirir.`),
        whyImportant: L(`Bir çox şirkətdə satış prosesi müştəri məlumatları fərqli fayllarda saxlanılır, satış menecerləri məlumatları fərqli üsullarla qeyd edir, potensial müştərilər unudulur və ya itirilir, satış mərhələləri izlənilə bilmir, rəhbərlik real satış vəziyyətini tam görə bilmir kimi problemlərlə üzləşir. Nəticədə satış imkanları itirilir, müştəri təcrübəsi zəifləyir, gəlir potensialı tam istifadə olunmur. Satış və Müştəri İdarəetmə ERP Modulu bu boşluqları aradan qaldırmaq üçün qurulur.`),
        howItWorks: [
          {
            title: L(`1. Satış prosesinin tam nəzarətdə olması`),
            description: L(`ERP Modulu hər bir satışın hansı mərhələdə olduğunu göstərir, gecikən və riskli satışları öncədən aşkarlayır. Bu, satış menecerlərinin işini daha planlı və nəticəyönümlü edir.`),
          },
          {
            title: L(`2. Müştəri məlumatlarının mərkəzləşdirilməsi`),
            description: L(`Bütün müştəri məlumatları əlaqə tarixçəsi, əvvəlki alışlar, xüsusi qeydlər vahid profildə saxlanılır. Bu, müştəriyə daha peşəkar və fərdiləşdirilmiş yanaşma imkanı yaradır.`),
          },
          {
            title: L(`3. Satışların artması və itkilərin azalması`),
            description: L(`ERP sistemi potensial müştərilərin unudulmasının qarşısını alır, satış prosesini sistemli edir, satışların bağlanma ehtimalını artırır. Nəticə: daha çox satış, daha az itki.`),
          },
          {
            title: L(`4. Zamana qənaət və işçi səmərəliliyi`),
            description: L(`Manual satış idarəetməsi vaxt aparır, işçi yükünü artırır. ERP Modulu isə məlumatların avtomatik qeydini təmin edir, hesabatları saniyələr içində təqdim edir, satış komandasının vaxtını azad edir. Bu, zamana qənaət etmək və işçi xərclərinin azalması deməkdir.`),
          },
          {
            title: L(`5. Rəhbərlik üçün real vaxtda satış analitikası`),
            description: L(`ERP Modulu rəhbərliyə satış həcmini, satış komandası performansını, müştəri davranışlarını real vaxtda göstərir. Bu, strateji qərarların təxminə yox, faktlara əsaslanmasına imkan yaradır.`),
          },
        ],
        benefits: [
          L(`Müştəri məlumatlarının vahid bazada saxlanması`),
          L(`Satış proseslərinin izlənməsi və analiz edilməsi`),
          L(`Satış performansının artırılması`),
          L(`Müştəri məmnuniyyətinin yüksəlməsi`),
          L(`Uzunmüddətli müştəri əlaqələrinin qurulması`),
        ],
        forWho: L(`Bu modul xüsusilə B2B satış edən şirkətlər, xidmət sektorunda fəaliyyət göstərən bizneslər, çoxsaylı satış meneceri olan müəssisələr, sürətlə böyüyən şirkətlər üçün idealdır. Əgər satış prosesiniz dağınıqdırsa, izlənilə bilmirsə, müştəri itkiləri yaşanırsa, bu modul artıq zəruridir.`),
        conclusion: L(`Satış prosesi nə qədər sistemlidirsə müştəri məmnuniyyəti artır, satış itkiləri azalır, biznes daha sürətli böyüyür. Düzgün qurulmuş Satış və Müştəri İdarəetmə ERP Modulu şirkətin gəlir artımının əsas dayaqlarından biridir.`),
      },
      {
        id: "erp-crm-5",
        title: L(`İnsan Resursları (HR) ERP Sistemi`),
        desc: L(`İşçi heyətinin idarə olunmasını avtomatlaşdıran və sadələşdirən ERP həlli.`),
        whatIs: L(`İnsan Resursları (HR) ERP Sistemi — şirkətdə çalışan əməkdaşların bütün həyat dövrünü (işə qəbuldan işdən çıxışa qədər) vahid, mərkəzləşdirilmiş və avtomatlaşdırılmış sistem üzərindən idarə etməyə imkan verən ERP moduludur. Bu sistem işçi məlumatlarını bir mərkəzdə saxlayır, HR proseslərini avtomatlaşdırır, rəhbərliyə real vaxtda işçi strukturu və performans haqqında məlumat verir. Sadə desək, HR ERP Sistemi insan resurslarını təsadüfi deyil, sistemli şəkildə idarə etməyə imkan yaradır.`),
        whyImportant: L(`Bir çox şirkətdə HR prosesi hələ də Excel faylları, kağız sənədlər, fərdi qeydlər üzərindən idarə olunur. Bu isə işçi məlumatlarının dağınıq saxlanması, məzuniyyət və iş vaxtı qarışıqlığı, performansın obyektiv ölçülməməsi, maaş və bonuslarda səhvlər, rəhbərliyin real HR vəziyyətini görə bilməməsi kimi problemlərə səbəb olur. HR ERP Sistemi bu problemləri aradan qaldırmaq üçün qurulur.`),
        howItWorks: [
          {
            title: L(`1. İşçi məlumatlarının mərkəzləşdirilməsi`),
            description: L(`Bütün əməkdaş məlumatları şəxsi məlumatlar, vəzifə və struktur, əmək haqqı və tarixçə vahid profildə saxlanılır. Bu, HR komandasının işini daha sürətli və dəqiq edir.`),
          },
          {
            title: L(`2. Zamana qənaət və HR proseslərinin avtomatlaşdırılması`),
            description: L(`Manual HR əməliyyatları vaxt aparır, səhv ehtimalını artırır. HR ERP Sistemi rutin işləri avtomatlaşdırır, HR komandasını strateji işlərə fokuslanmağa imkan verir. Bu isə zamana qənaət etmək və işçi xərclərinin azalması deməkdir.`),
          },
          {
            title: L(`3. İşçi performansının obyektiv qiymətləndirilməsi`),
            description: L(`Sistem KPI və performans göstəricilərini izləyir, inkişaf ehtiyaclarını göstərir, ədalətli qiymətləndirmə mühiti yaradır. Bu, işçi motivasiyasını və məhsuldarlığı artırır.`),
          },
          {
            title: L(`4. Rəhbərlik üçün real vaxtda HR analitikası`),
            description: L(`HR ERP Sistemi rəhbərliyə işçi sayı və struktur, dövriyyə (turnover), performans göstəriciləri, HR xərcləri haqqında real vaxtda analitik məlumatlar təqdim edir. Bu, qərarverməni təxminə yox, dataya əsaslanan prosesə çevirir.`),
          },
          {
            title: L(`5. Şirkət mədəniyyətinin və nizam-intizamın güclənməsi`),
            description: L(`HR proseslərinin sistemləşdirilməsi qaydaların şəffaf tətbiqini, işçilər arasında bərabərliyi, məsuliyyət bölgüsünü gücləndirir. Bu isə uzunmüddətli perspektivdə şirkət mədəniyyətini möhkəmləndirir.`),
          },
        ],
        benefits: [
          L(`İşçi məlumatlarının mərkəzləşdirilmiş idarəsi`),
          L(`Məzuniyyət və iş vaxtının avtomatik izlənməsi`),
          L(`Performans qiymətləndirməsinin asanlaşdırılması`),
          L(`HR proseslərində vaxta qənaət`),
          L(`İnsan resursları üzrə daha dəqiq qərarlar`),
        ],
        forWho: L(`Bu sistem xüsusilə orta və böyük şirkətlər, sürətlə böyüyən bizneslər, çoxsaylı işçisi olan müəssisələr, strukturlaşma mərhələsində olan şirkətlər üçün idealdır. Əgər şirkətinizdə HR prosesi qarışıqdırsa, işçi məlumatları dağınıqdırsa, performans ölçülmürsə, HR ERP Sistemi artıq zərurətə çevrilib.`),
        conclusion: L(`İnsan resursları düzgün idarə olunmadıqda motivasiya azalır, məhsuldarlıq düşür, işçi dövriyyəsi artır. Düzgün qurulmuş İnsan Resursları (HR) ERP Sistemi isə işçilərin potensialını açır, rəhbərliyə nəzarət verir, biznesin dayanıqlı inkişafını təmin edir.`),
      },
      {
        id: "erp-crm-6",
        title: L(`ERP Hesabat və Analitika Sistemi`),
        desc: L(`Biznes göstəricilərini analiz edən və rəhbərlik üçün hesabatlar yaradan ERP modulu.`),
        whatIs: L(`ERP Hesabat və Analitika Sistemi — şirkətin bütün əməliyyat məlumatlarını (satış, maliyyə, anbar, HR və s.) vahid mərkəzdə toplayaraq, onları aydın, ölçülə bilən və qərarverməyə uyğun hesabatlara çevirən analitik ERP moduludur. Bu sistem xam məlumatları mənalı göstəricilərə çevirir, rəhbərliyə real vaxtda vəziyyəti göstərir, strateji qərarların dataya əsaslanmasını təmin edir. Sadə desək, bu sistem "nə baş verir?" sualına yox, "niyə baş verir və nə etməliyik?" sualına cavab verir.`),
        whyImportant: L(`Bir çox şirkətdə hesabatlar fərqli şöbələrdən əl ilə toplanır, Excel fayllarında hazırlanır, gecikmiş və natamam olur, real vəziyyəti tam əks etdirmir. Bu isə yanlış qərarlar, gec reaksiya, gəlir və xərclərə nəzarətin itməsi, rəhbərliyin vəziyyəti hissiyatla idarə etməsi kimi problemlərə səbəb olur. ERP Hesabat və Analitika Sistemi bu dağınıqlığı aradan qaldırmaq üçün qurulur.`),
        howItWorks: [
          {
            title: L(`1. Real vaxtda qərarvermə imkanı`),
            description: L(`Sistem məlumatları anında yeniləyir, gecikmiş hesabat problemini aradan qaldırır. Bu, rəhbərliyə vaxtında və düzgün qərar vermək imkanı yaradır.`),
          },
          {
            title: L(`2. Gəlir və xərclərə tam nəzarət`),
            description: L(`ERP Analitika Sistemi gəlir mənbələrini, xərclərin harada artdığını, mənfəət marjalarını aydın şəkildə göstərir. Bu isə xərclərin optimallaşdırılması və mənfəətin artırılması deməkdir.`),
          },
          {
            title: L(`3. Şəffaflıq və nəzarət`),
            description: L(`Bütün göstəricilər sistemdə açıq olduğu üçün manipulyasiya azalır, daxili nəzarət güclənir, məsuliyyət bölgüsü aydınlaşır. Bu, korporativ idarəetməni gücləndirir.`),
          },
          {
            title: L(`4. Zamana qənaət və avtomatlaşdırma`),
            description: L(`Manual hesabatlar saatlarla vaxt aparır, insan səhvinə açıqdır. ERP Analitika Sistemi hesabatları avtomatik yaradır, rəhbər və menecerlərin vaxtını azad edir. Bu, zamana qənaət etmək və əməliyyat səmərəliliyini artırmaq deməkdir.`),
          },
          {
            title: L(`5. Biznesin böyüməsi üçün strateji baxış`),
            description: L(`Analitika trendləri göstərir, riskləri öncədən aşkarlayır, inkişaf imkanlarını ortaya çıxarır. Bu sistem qısamüddətli yox, uzunmüddətli böyümə üçün əsas yaradır.`),
          },
        ],
        benefits: [
          L(`Real vaxtda analitik hesabatlar`),
          L(`Strateji qərarlar üçün dəqiq məlumat`),
          L(`Risklərin vaxtında aşkar edilməsi`),
          L(`Biznes performansının ölçülməsi`),
          L(`Planlama və proqnozlaşdırmanın gücləndirilməsi`),
        ],
        forWho: L(`Bu sistem xüsusilə orta və böyük şirkətlər, sürətlə böyüyən bizneslər, çoxşöbəli müəssisələr, rəhbərliyin dataya əsaslanan qərar vermək istədiyi şirkətlər üçün idealdır. Əgər hesabatlar gec hazırlanırsa, rəqəmlər bir-birini tutmursa, qərarlar hissiyatla verilirsə, bu sistem artıq vacib ehtiyacdır.`),
        conclusion: L(`Əgər biznes ölçülmürsə, analiz olunmursa, izlənilmirsə, onun böyüməsi təsadüfə qalır. Düzgün qurulmuş ERP Hesabat və Analitika Sistemi isə nəzarət yaradır, riskləri azaldır, gəliri artırır, biznesi idarə olunan hala gətirir.`),
      },
      {
        id: "erp-crm-7",
        title: L(`ERP Sistemlərinin Mövcud Platformalarla İnteqrasiyası`),
        desc: L(`ERP-ni digər proqram və sistemlərlə uyğunlaşdıran inteqrasiya həlləri.`),
        whatIs: L(`ERP Sistemlərinin Mövcud Platformalarla İnteqrasiyası — şirkətin hal-hazırda istifadə etdiyi proqram və platformaların (mühasibatlıq proqramları, CRM, e-commerce saytlar, bank sistemləri, POS, anbar proqramları, HR alətləri və s.) vahid ERP sistemi ilə əlaqələndirilməsi və sinxron işləməsinin təmin edilməsidir. Bu xidmət sayəsində məlumatlar bir sistemdən digərinə əl ilə ötürülmür, eyni məlumat bir neçə dəfə daxil edilmir, bütün proseslər avtomatik və real vaxtda işləyir. Sadə desək, bu inteqrasiya dağınıq proqramları bir-biri ilə danışan vahid sistemə çevirir.`),
        whyImportant: L(`Bir çox şirkətdə mühasibatlıq üçün bir proqram, satış üçün başqa sistem, anbar üçün ayrıca proqram, online satış üçün veb-sayt, bank əməliyyatları üçün ayrıca platforma istifadə olunur. Amma bu sistemlər bir-biri ilə əlaqəli deyil. Nəticədə məlumatlar uyğun gəlmir, hesabatlar fərqli rəqəmlər göstərir, proseslər yavaşıyır, səhvlər artır, qərarvermə çətinləşir. ERP inteqrasiyası bu problemi kökündən həll edir.`),
        howItWorks: [
          {
            title: L(`1. Vahid və etibarlı məlumat mənbəyi`),
            description: L(`ERP inteqrasiyası ilə bütün məlumatlar bir mərkəzdə toplanır, fərqli sistemlərdə fərqli rəqəmlər problemi aradan qalxır. Rəhbərlik bir rəqəmə baxaraq qərar verir.`),
          },
          {
            title: L(`2. Zamana qənaət və işçi yükünün azalması`),
            description: L(`Avtomatik inteqrasiya təkrarlanan əməliyyatları ləğv edir, işçilərin vaxtını azad edir, əməliyyat sürətini artırır. Bu, birbaşa zamana qənaət etmək və işçi xərclərinin azalması deməkdir.`),
          },
          {
            title: L(`3. Səhvlərin və risklərin minimuma endirilməsi`),
            description: L(`Sistemlər arasında avtomatik məlumat axını insan səhvlərini azaldır, maliyyə və stok risklərini minimuma endirir, nəzarəti gücləndirir. Bu isə biznesin təhlükəsizliyini artırır.`),
          },
          {
            title: L(`4. Real vaxtda hesabat və analitika`),
            description: L(`İnteqrasiya olunmuş ERP bütün platformalardan məlumatları toplayır, real vaxtda hesabatlar yaradır, rəhbərliyə anlıq vəziyyəti göstərir. Bu, operativ və düzgün qərarvermə imkanı yaradır.`),
          },
          {
            title: L(`5. Biznesin böyüməsinə hazır infrastruktur`),
            description: L(`ERP inteqrasiyası yeni platformaların asan əlavə edilməsini, biznesin miqyaslanmasını, texnoloji dayanıqlığı təmin edir. Bu sistem bu gün üçün yox, gələcək böyümə üçün qurulur.`),
          },
        ],
        benefits: [
          L(`CRM, bank, anbar və digər sistemlərlə əlaqə`),
          L(`Məlumatların avtomatik ötürülməsi`),
          L(`Təkrarlanan əməliyyatların aradan qaldırılması`),
          L(`Proseslərin fasiləsiz işləməsi`),
          L(`Ümumi sistem səmərəliliyinin artması`),
        ],
        forWho: L(`Bu xidmət xüsusilə çoxsaylı proqramlardan istifadə edən şirkətlər, sürətlə böyüyən bizneslər, e-commerce və fiziki satışları paralel aparan müəssisələr, maliyyə və əməliyyat nəzarətini gücləndirmək istəyən rəhbərlik üçün zəruridir. Əgər sistemləriniz bir-biri ilə uyğun gəlmirsə, məlumatlar üst-üstə düşmürsə, hesabatlara tam etibar etmirsinizsə, ERP inteqrasiyası qaçılmazdır.`),
        conclusion: L(`Əgər sistemləriniz ayrı-ayrı işləyirsə biznes yavaşlayır, xərclər artır, qərarlar riskli olur. Düzgün qurulmuş ERP Sistemlərinin Mövcud Platformalarla İnteqrasiyası isə prosesi sürətləndirir, xərcləri azaldır, biznesə tam nəzarət verir.`),
      },
    ],
  },
  {
    id: "marketing",
    color: "#F59E0B",
    title: { az: "Marketinq", en: "Marketing" },
    desc: { az: `Rəqəmsal marketinq strategiyaları ilə müştərilərinizə çatın. SEO, sosial media, kontent marketinqi və daha çox.`, en: `Reach customers with digital marketing strategies. SEO, social media, content marketing and more.` },
    items: [
      {
        id: "marketing-1",
        title: L(`Rəqəmsal Marketinq Strategiyasının Hazırlanması`),
        desc: L(`Biznes məqsədlərinə uyğun, ölçülə bilən və nəticəyönümlü marketinq strategiyalarının qurulması.`),
        whatIs: L(`Rəqəmsal Marketinq Strategiyası — biznesin online mühitdə necə görünəcəyini, müştəriyə necə çatacağını, hansı kanallardan satış edəcəyini və marketinq büdcəsini necə səmərəli istifadə edəcəyini müəyyən edən strateji yol xəritəsidir. Strategiya olmadan edilən marketinq təsadüfi olur, pul xərcləyir amma nəticə vermir, satışa çevrilmir. Düzgün hazırlanmış rəqəmsal marketinq strategiyası marketinqi xərc yox, ölçülə bilən investisiyaya çevirir.`),
        whyImportant: L(`Bir çox biznesdə sosial mediada paylaşım edilir, reklam verilir, dizayn hazırlanır, amma bunlar vahid məqsədə xidmət etmir. Nəticədə izləyici var satış yoxdur, reklam gedir geri dönüş zəifdir, marketinq xərcləri boşa gedir, rəhbərlik marketinqin real təsirini görmür. Bu nöqtədə problem icra deyil — strateji boşluqdur.`),
        howItWorks: [
          {
            title: L(`1. Doğru müştəriyə doğru mesaj`),
            description: L(`Strategiya kimə danışmalı olduğunuzu, nə deməli olduğunuzu, harada görünməli olduğunuzu dəqiq müəyyən edir. Bu isə satışa çevrilən marketinq yaradır.`),
          },
          {
            title: L(`2. Marketinq büdcəsinin səmərəli istifadəsi`),
            description: L(`Strateji planlama lazımsız reklam xərclərini azaldır, doğru kanallara fokuslanır, büdcəni ölçülə bilən nəticələrə yönəldir. Bu, xərci azaldıb gəliri artırmaq deməkdir.`),
          },
          {
            title: L(`3. Satış qıfının (funnel) qurulması`),
            description: L(`Strategiya müştərini tanımaqdan satışa qədər olan yolu planlaşdırır, potensial müştərini mərhələ-mərhələ satışa hazırlayır. Bu, təsadüfi yox, davamlı satış yaradır.`),
          },
          {
            title: L(`4. Brendin güclü mövqeləndirilməsi`),
            description: L(`Düzgün strategiya brendi rəqiblərdən fərqləndirir, bazarda etibarlı mövqe yaradır, uzunmüddətli tanınma təmin edir. Bu, qiymət yarışından çıxıb dəyər üzərindən satış etməyə imkan verir.`),
          },
          {
            title: L(`5. Ölçülə bilən nəticələr və nəzarət`),
            description: L(`Strategiya çərçivəsində KPI-lar müəyyən edilir, nəticələr ölçülür, zəif nöqtələr optimallaşdırılır. Rəhbərlik marketinqin real təsirini rəqəmlərlə görür.`),
          },
        ],
        benefits: [
          L(`Dəqiq hədəf auditoriyanın müəyyən edilməsi`),
          L(`Büdcənin səmərəli bölüşdürülməsi`),
          L(`Marketinq fəaliyyətlərində ardıcıllıq`),
          L(`Satış və brend məqsədlərinin uzlaşdırılması`),
          L(`Uzunmüddətli inkişaf planı`),
        ],
        forWho: L(`Bu xidmət xüsusilə satışlarını artırmaq istəyən şirkətlər, reklam verib nəticə ala bilməyən bizneslər, bazarda güclü mövqelənmək istəyən brendlər, B2B və B2C şirkətlər üçün vacibdir. Əgər marketinq var amma satış artmırsa, reklam gedir amma geri dönüş zəifdirsə, brend qarışıqlığı varsa, problem icrada yox, strategiyanın olmamasındadır.`),
        conclusion: L(`Əgər biznes plan olmadan reklam edirsə, ölçmədən marketinq edirsə, satışa fokuslanmırsa, orada artım təsadüfi olur. Düzgün hazırlanmış Rəqəmsal Marketinq Strategiyası isə satışları artırır, xərcləri optimallaşdırır, brendi gücləndirir, biznesi böyüdür.`),
      },
      {
        id: "marketing-2",
        title: L(`Brend Strategiyası və Mövqeləndirmə (Brending)`),
        desc: L(`Brendin bazarda tanıdılması və mövqeləndirilməsi.`),
        whatIs: L(`Brend Strategiyası və Mövqeləndirmə (Brending) — biznesin bazarda necə tanınacağını, müştərinin sizi necə xatırlayacağını və rəqiblərdən nə ilə fərqlənəcəyinizi müəyyən edən strateji prosesdir. Brend sadəcə loqo və rənglər deyil. Brend müştərinin sizə olan etibarıdır, seçim anında sizi xatırlamasıdır, qiymətə yox dəyərə görə seçilməyinizdir. Brend strategiyası şirkəti bazarda görünən yox, seçilən brendə çevirir.`),
        whyImportant: L(`Bir çox biznesdə loqoya malikdir, sosial mediada paylaşımlar edir, reklam verir, amma müştərinin beynində aydın mövqe tutmur. Nəticədə müştəri sizi rəqiblərlə qarışdırır, qiymət yarışına düşürsünüz, fərqlənmə gücünüz zəifləyir, satışlar təsadüfi olur. Bu problemin kökü strateji brend mövqeləndirməsinin olmamasıdır.`),
        howItWorks: [
          {
            title: L(`1. Rəqiblərdən aydın şəkildə fərqlənmə`),
            description: L(`Düzgün mövqeləndirmə sizi bazarda unikal edir, eyni xidməti göstərən rəqiblərdən ayırır. Bu, qiymət yox, dəyər üzərindən satış imkanı yaradır.`),
          },
          {
            title: L(`2. Müştəri etibarının formalaşması`),
            description: L(`Güclü brend inam yaradır, qərarvermə müddətini qısaldır, müştərinin sizi seçməsini asanlaşdırır. İnsanlar tanıdığı və güvəndiyi brendlərdən alır.`),
          },
          {
            title: L(`3. Satışların davamlı artımı`),
            description: L(`Brend strategiyası müştərini təkcə cəlb etmir, onu geri qaytarır. Bu isə təkrarlanan satışlar və uzunmüddətli gəlir deməkdir.`),
          },
          {
            title: L(`4. Marketinq xərclərinin optimallaşdırılması`),
            description: L(`Aydın brend mesajı reklamların daha effektiv olmasını, daha az büdcə ilə daha çox nəticə əldə edilməsini təmin edir.`),
          },
          {
            title: L(`5. Brendin miqyaslana bilməsi`),
            description: L(`Strateji brend yeni məhsul və xidmətlərin asan qəbul olunmasını, yeni bazarlara girişin sürətlənməsini təmin edir. Bu, böyüməyə hazır brend infrastrukturu yaradır.`),
          },
        ],
        benefits: [
          L(`Brendin unikal dəyər təklifinin formalaşdırılması`),
          L(`Rəqiblər qarşısında aydın mövqe`),
          L(`Brend tanınmasının artması`),
          L(`Müştəri etibarının güclənməsi`),
          L(`Davamlı brend imici`),
        ],
        forWho: L(`Bu xidmət xüsusilə bazarda fərqlənmək istəyən şirkətlər, qiymət yarışından çıxmaq istəyən bizneslər, yeni brend yaradan və ya rebrending edən şirkətlər, B2B və B2C sahəsində fəaliyyət göstərən müəssisələr üçün vacibdir. Əgər müştərilər sizi xatırlamırsa, eyni xidmət göstərənlərlə qarışdırılırsınızsa, satışlar stabil deyilsə, problem məhsulda yox, brend mövqeyindədir.`),
        conclusion: L(`Zəif brend daha çox izah tələb edir, daha çox reklam xərci yaradır, daha az etibar qazandırır. Güclü brend isə özü danışır, özü satır, bazarda qalıcı olur.`),
      },
      {
        id: "marketing-3",
        title: L(`Sosial Media Marketinqi və İdarəetmə`),
        desc: L(`Brendin sosial media kanallarında effektiv və satışyönümlü idarə olunması.`),
        whatIs: L(`Sosial Media Marketinqi və İdarəetmə — brendin sosial platformalarda (Instagram, Facebook, LinkedIn və s.) planlı, strateji və satış yönümlü şəkildə idarə olunmasıdır. Bu xidmət sadəcə paylaşım etmək deyil, müştəri cəlb etmək, etibar yaratmaq və satışı artırmaq üçün qurulan sistemdir. Bu yanaşmada sosial media vaxt dolduran platforma yox, satış və böyümə alətidir.`),
        whyImportant: L(`Bir çox biznesdə paylaşımlar edilir, dizayn hazırlayır, reklam verir, amma müştəri yazmır, satış artmır, brend yadda qalmır. Çünki problem paylaşımda yox, idarəetmənin strategiyasız olmasındadır.`),
        howItWorks: [
          {
            title: L(`1. Brendin davamlı və peşəkar görünməsi`),
            description: L(`Düzgün idarə olunan sosial media brendi etibarlı göstərir, müştərinin qərar verməsini asanlaşdırır, bazarda peşəkar imic yaradır. İnsanlar güvəndiyi brendlərdən alır.`),
          },
          {
            title: L(`2. Müştəri ilə birbaşa və sürətli əlaqə`),
            description: L(`Sosial media müştərinin ilk təmas nöqtəsidir, sualların və marağın yarandığı yerdir. Düzgün idarəetmə mesajlara vaxtında cavab, münasib ünsiyyət, satışa yönləndirmə imkanı yaradır.`),
          },
          {
            title: L(`3. Satışların artması`),
            description: L(`Planlı kontent və düzgün çağırışlar (CTA) izləyicini potensial müştəriyə, potensial müştərini real alıcıya çevirir. Bu, sosial medianın birbaşa satış kanalına çevrilməsi deməkdir.`),
          },
          {
            title: L(`4. Marketinq xərclərinin optimallaşdırılması`),
            description: L(`Strategiyalı sosial media reklamlarda daha yüksək geri dönüş (ROI), düzgün auditoriyaya fokuslanma, lazımsız xərclərin azalması yaradır.`),
          },
          {
            title: L(`5. Ölçülə bilən nəticələr və nəzarət`),
            description: L(`İdarəetmədə baxışlar, kliklər, mesajlar, müraciətlər və satışa təsir ölçülür və analiz olunur. Rəhbərlik sosial medianın real biznes təsirini rəqəmlərlə görür.`),
          },
        ],
        benefits: [
          L(`Peşəkar kontent planlaması`),
          L(`Müştərilərlə aktiv və ardıcıl ünsiyyət`),
          L(`Brend imicinin gücləndirilməsi`),
          L(`Sosial mediadan satış imkanlarının artırılması`),
          L(`Analitik nəticələr əsasında optimallaşdırma`),
        ],
        forWho: L(`Bu xidmət xüsusilə müştəri ilə birbaşa əlaqə quran bizneslər, xidmət və pərakəndə satış sektorları, otellər, klinikalar, təlim mərkəzləri, B2B və B2C şirkətlər üçün vacibdir. Əgər sosial media aktivdir amma satış yoxdur, mesajlar gec cavablanır, brend qarışıqlığı yaşanırsa, problem idarəetmədədir.`),
        conclusion: L(`Plansız sosial media brendi zəiflədir, satış imkanlarını itirir. Düzgün idarə olunan Sosial Media Marketinqi və İdarəetmə isə müştəri sayını artırır, satışları gücləndirir, brendi böyüdür.`),
      },
      {
        id: "marketing-4",
        title: L(`Reklam Kampaniyalarının Planlanması və İdarə Edilməsi`),
        desc: L(`Onlayn reklam platformalarında effektiv və məqsədyönlü kampaniyaların qurulması.`),
        whatIs: L(`Reklam Kampaniyalarının Planlanması və İdarə Edilməsi — biznesin məhsul və xidmətlərini doğru auditoriyaya, doğru zamanda və doğru mesajla çatdırmaq üçün reklam proseslərinin strateji şəkildə qurulması, icrası və optimallaşdırılmasıdır. Bu xidmət sadəcə reklam vermək deyil. Bu xidmət büdcəni qoruyan, satışı artıran, ölçülə bilən nəticə yaradan peşəkar reklam idarəetmə sistemidir. Burada reklam xərc yox, geri dönüşü olan investisiyadır.`),
        whyImportant: L(`Bir çox biznesdə reklam verir, büdcə xərcləyir, klik və baxış alır, amma real müştəri gəlmir, satış artmır, geri dönüş (ROI) zəif olur. Bunun səbəbi reklamın özü yox, plansız və nəzarətsiz idarə olunmasıdır.`),
        howItWorks: [
          {
            title: L(`1. Doğru auditoriyaya çıxış`),
            description: L(`Peşəkar planlama sayəsində reklam yalnız potensial müştərilərə göstərilir, maraqsız auditoriyaya pul xərclənmir. Bu, daha az büdcə ilə daha çox nəticə deməkdir.`),
          },
          {
            title: L(`2. Satışların və müraciətlərin artması`),
            description: L(`Düzgün qurulmuş kampaniyalar müştərini cəlb edir, satışa yönləndirir, müraciət sayını artırır. Reklam birbaşa satış mexanizminə çevrilir.`),
          },
          {
            title: L(`3. Büdcənin effektiv idarə olunması`),
            description: L(`Reklam idarəetməsində büdcə gündəlik nəzarətdə saxlanılır, zəif kampaniyalar dayandırılır, effektiv kampaniyalar gücləndirilir. Bu, reklam xərclərinin optimallaşdırılması deməkdir.`),
          },
          {
            title: L(`4. Ölçülə bilən nəticələr və şəffaflıq`),
            description: L(`Hər kampaniya üzrə kliklər, müraciətlər, satışa təsir ölçülür və hesabatlandırılır. Rəhbərlik reklama xərclənən hər manatın qarşılığını görür.`),
          },
          {
            title: L(`5. Brend tanınmasının güclənməsi`),
            description: L(`Davamlı və düzgün reklam brendin bazarda görünməsini artırır, etibar yaradır, müştərinin sizi tanımasını təmin edir. Bu, uzunmüddətli satışlara zəmin yaradır.`),
          },
        ],
        benefits: [
          L(`Doğru auditoriyaya düzgün mesaj`),
          L(`Reklam büdcəsinə nəzarət`),
          L(`Kampaniya nəticələrinin ölçülməsi`),
          L(`Geri dönüşün (ROI) artırılması`),
          L(`Brend görünürlüyünün artması`),
        ],
        forWho: L(`Bu xidmət xüsusilə satışını artırmaq istəyən şirkətlər, reklam verib nəticə ala bilməyən bizneslər, yeni məhsul və xidmət təqdim edən brendlər, B2B və B2C şirkətlər üçün vacibdir. Əgər reklam xərci artır satış artmırsa, kampaniyalar nəzarətsizdirsə, geri dönüş zəifdirsə, problem idarəetmədədir.`),
        conclusion: L(`Plansız reklam büdcəni əritir, biznesi yavaşladır. Düzgün planlanmış və idarə olunan Reklam Kampaniyaları isə satışları artırır, brendi gücləndirir, biznesi böyüdür.`),
      },
      {
        id: "marketing-5",
        title: L(`Vizual Kimlik və Brend Dizaynı`),
        desc: L(`Brendin vizual üslubunu formalaşdıran dizayn və identifikasiya həlləri.`),
        whatIs: L(`Vizual Kimlik və Brend Dizaynı — brendin bazarda necə görünəcəyini, müştərinin sizi ilk baxışda necə tanıyacağını və yadda saxlayacağını müəyyən edən strateji dizayn prosesidir. Vizual kimlik sadəcə loqo deyil. Vizual kimlik brendin xarakteridir, etibarın ilk təmas nöqtəsidir, müştərinin şüuraltı qərarına təsir edən əsas amildir. Dizayn gözəllik yox, satış və etibar yaradan alətdir.`),
        whyImportant: L(`Bir çox biznesdə loqo mövcuddur, rənglər istifadə olunur, postlar paylaşılır, amma bütün platformalarda fərqli görünür, peşəkar təəssürat yaratmır, brend yadda qalmır. Bu problem dizaynda yox, vizual kimliyin strateji qurulmamasındadır.`),
        howItWorks: [
          {
            title: L(`1. İlk baxışda etibar və peşəkarlıq`),
            description: L(`Peşəkar vizual kimlik müştərinin qərar verməsini asanlaşdırır, sizi bazarda ciddi və güvənilir göstərir. İlk təəssürat satışın yarısını həll edir.`),
          },
          {
            title: L(`2. Brendin yadda qalması`),
            description: L(`Düzgün dizayn sizi rəqiblərdən ayırır, brendi tanınan edir, müştərinin beynində iz buraxır. Bu, uzunmüddətli satış üçün vacibdir.`),
          },
          {
            title: L(`3. Marketinq və reklam effektivliyinin artması`),
            description: L(`Vahid vizual dil reklamların daha təsirli olmasını, mesajların daha tez qəbul edilməsini təmin edir. Bu, reklam büdcəsinin daha səmərəli xərclənməsi deməkdir.`),
          },
          {
            title: L(`4. Satış prosesinin asanlaşması`),
            description: L(`Peşəkar görünən brend daha az izah tələb edir, daha tez etibar qazanır, qiymət müzakirəsini azaldır. Bu isə satışların daha rahat bağlanmasına kömək edir.`),
          },
          {
            title: L(`5. Brendin böyüməyə hazır olması`),
            description: L(`Strateji vizual kimlik yeni məhsul və xidmətlərin rahat təqdim edilməsini, yeni bazarlara girişin asanlaşmasını təmin edir. Bu, brendi miqyaslana bilən hala gətirir.`),
          },
        ],
        benefits: [
          L(`Peşəkar loqo və dizayn konsepti`),
          L(`Brendin vizual olaraq fərqlənməsi`),
          L(`Bütün platformalarda vahid üslub`),
          L(`Brendin yadda qalan görünüşü`),
          L(`Güclü vizual təsir`),
        ],
        forWho: L(`Bu xidmət xüsusilə yeni brend yaradan şirkətlər, rebrending edən bizneslər, premium mövqelənmək istəyən markalar, B2B və B2C sahəsində fəaliyyət göstərən şirkətlər üçün vacibdir. Əgər brendiniz qarışıq görünürsə, müştərilər sizi rəqiblərlə qarışdırırsa, dizayn satışa kömək etmirsə, problem vizual kimlikdədir.`),
        conclusion: L(`Zəif dizayn satışı çətinləşdirir, etibarı azaldır. Güclü vizual kimlik isə müştəri cəlb edir, etibar yaradır, satışları sürətləndirir.`),
      },
      {
        id: "marketing-6",
        title: L(`Kontent Marketinqi və Kopiraytinq`),
        desc: L(`Brend üçün dəyər yaradan, məlumatlandıran və satışa yönəldən mətn və məzmunların hazırlanması.`),
        whatIs: L(`Kontent Marketinqi və Kopiraytinq — biznesin hədəf auditoriyası ilə doğru dildə, doğru mesajla və doğru platformada ünsiyyət qurmasını təmin edən strateji məzmun istehsalı prosesidir. Bu xidmət sadəcə mətn yazmaq deyil. Bu xidmət müştərinin diqqətini çəkmək, etibar yaratmaq, qərarverməni sürətləndirmək üçün qurulan satış yönümlü kommunikasiya sistemidir. Kontent söz yığını yox, satışa xidmət edən alətdir.`),
        whyImportant: L(`Bir çox biznesdə paylaşımlar edilir, mətnlər yazılır, bloqlar dərc edilir, amma müştəri reaksiya vermir, sayt oxunur amma müraciət gəlmir, sosial media aktivdir amma satış yoxdur. Çünki problem kontentin olmasında yox, strateji və satış yönümlü yazılmamasındadır.`),
        howItWorks: [
          {
            title: L(`1. Müştərinin diqqətini cəlb edən mesajlar`),
            description: L(`Düzgün yazılmış kontent müştərinin problemini tanıyır, onun dilində danışır, maraq yaradır. Bu, satış prosesinin ilk və ən vacib mərhələsidir.`),
          },
          {
            title: L(`2. Etibar və ekspert imicinin formalaşması`),
            description: L(`Keyfiyyətli kontent brendi mütəxəssis kimi göstərir, müştərinin güvənini artırır, seçim anında sizi önə çıxarır. İnsanlar güvəndiyi brendlərdən alır.`),
          },
          {
            title: L(`3. Satışa çevrilən məzmun`),
            description: L(`Satış yönümlü kopiraytinq oxuyanı düşünməyə, maraqlananı yazmağa, yazanı almağa yönləndirir. Bu, kontentin birbaşa gəlir gətirməsi deməkdir.`),
          },
          {
            title: L(`4. SEO ilə uzunmüddətli trafik`),
            description: L(`SEO-yə uyğun yazılmış kontent Google axtarışlarında görünürlük yaradır, uzunmüddətli orqanik trafik gətirir, reklamsız müştəri axını təmin edir. Bu isə marketinq xərclərinin uzunmüddətli azalması deməkdir.`),
          },
          {
            title: L(`5. Marketinq və reklam effektivliyinin artması`),
            description: L(`Düzgün kontent reklamların dönüşünü yüksəldir, kliklərin keyfiyyətini artırır, satış qıfını gücləndirir. Kontent reklamın performansını birbaşa təsir edir.`),
          },
        ],
        benefits: [
          L(`Satışyönümlü mətnlər`),
          L(`Brend dilinə uyğun kontent`),
          L(`Müştəri etibarının artması`),
          L(`Axtarış sistemləri üçün optimallaşdırılmış məzmun`),
          L(`Uzunmüddətli dəyər yaradan kontent strategiyası`),
        ],
        forWho: L(`Bu xidmət xüsusilə xidmət sektoru şirkətləri, B2B satış edən bizneslər, otellər, klinikalar, təlim mərkəzləri, e-commerce və korporativ brendlər üçün vacibdir. Əgər sayt oxunur amma müraciət gəlmirsə, sosial media aktivdir amma satış yoxdur, reklam gedir amma geri dönüş zəifdirsə, problem kontentin satış yönümlü olmamasıdır.`),
        conclusion: L(`Zəif kontent diqqət çəkmir, etibar yaratmır, satışı ləngidir. Güclü kontent isə maraq yaradır, güvən qazandırır, satışları artırır.`),
      },
      {
        id: "marketing-7",
        title: L(`Analitika və Marketinq Hesabatları`),
        desc: L(`Marketinq fəaliyyətlərinin nəticələrini ölçən və təhlil edən analitik xidmətlər.`),
        whatIs: L(`Analitika və Marketinq Hesabatları — marketinq fəaliyyətlərindən əldə olunan bütün məlumatların (reklamlar, sosial media, sayt trafiki, müraciətlər, satışa təsir və s.) toplanması, analiz edilməsi və qərarverməyə uyğun hesabatlara çevrilməsi prosesidir. Bu xidmətin məqsədi sadəcə rəqəm göstərmək deyil. Məqsəd nəyin işlədiyini, nəyin işləmədiyini, büdcənin hara getdiyini, satışa nəyin təsir etdiyini aydın şəkildə göstərməkdir. Analitika marketinqi hissiyatdan çıxarıb rəqəmlə idarə etməyə imkan verən alətdir.`),
        whyImportant: L(`Bir çox biznesdə reklam verir, postlar paylaşır, kampaniyalar edir, amma real nəticəni ölçmür, hansı kanalın işlədiyini bilmir, büdcəni kor-koranə xərcləyir. Nəticədə rəhbərlik "Marketinqə pul gedir, amma nə qədər gəlir gətirdiyini bilmirik" deyə düşünür. Bu nöqtədə problem marketinqin özündə yox, analitikanın olmamasındadır.`),
        howItWorks: [
          {
            title: L(`1. Marketinq büdcəsinə tam nəzarət`),
            description: L(`Analitika hansı reklamın nəticə verdiyini, hansının büdcəni boşa xərclədiyini aydın göstərir. Bu, lazımsız xərclərin azaldılması deməkdir.`),
          },
          {
            title: L(`2. Satışa real təsirin ölçülməsi`),
            description: L(`hesabatları marketinqin satışa necə təsir etdiyini, hansı kanalın daha çox müştəri gətirdiyini rəqəmlərlə sübut edir. Bu, marketinqin dəyərini rəhbərliyə göstərir.`),
          },
          {
            title: L(`3. Doğru qərarvermə`),
            description: L(`Rəqəmlərə əsaslanan analitika riskli qərarları azaldır, fürsətləri öncədən göstərir, strategiyanı vaxtında dəyişməyə imkan verir. Bu, təxmin yox, fakt əsasında idarəetmə deməkdir.`),
          },
          {
            title: L(`4. Marketinq strategiyasının optimallaşdırılması`),
            description: L(`Analitika sayəsində zəif kampaniyalar dayandırılır, güclü kampaniyalar böyüdülür, mesajlar və auditoriya optimallaşdırılır. Bu, daha az büdcə ilə daha çox nəticə yaradır.`),
          },
          {
            title: L(`5. Rəhbərlik üçün aydın və oxunaqlı hesabatlar`),
            description: L(`hesabatları texniki deyil, aydın, qərarverməyə fokuslanmış olur. CEO və rəhbərlik bir baxışda vəziyyəti anlayır.`),
          },
        ],
        benefits: [
          L(`Real nəticələrə əsaslanan qərarlar`),
          L(`Marketinq xərclərinin optimallaşdırılması`),
          L(`Effektiv kanalların müəyyən edilməsi`),
          L(`Strategiyanın davamlı təkmilləşdirilməsi`),
          L(`Şəffaf və anlaşılan hesabatlar`),
        ],
        forWho: L(`Bu xidmət xüsusilə aktiv reklam verən şirkətlər, marketinq büdcəsi olan bizneslər, B2B və B2C şirkətlər, rəhbərliyin nəticə görmək istədiyi müəssisələr üçün vacibdir. Əgər reklam xərcləri artır satış artmırsa, marketinqin dəyəri sübut olunmursa, qərarlar hissiyatla verilirsə, analitika qaçılmaz ehtiyacdır.`),
        conclusion: L(`Əgər marketinq ölçülmürsə, analiz olunmursa, nəticə ilə əlaqələndirilmirsə, orada inkişaf təsadüfi olur. Düzgün qurulmuş Analitika və Marketinq Hesabatları isə xərcləri nəzarətdə saxlayır, satışları artırır, marketinqi real dəyərə çevirir.`),
      },
    ],
  },
  {
    id: "web",
    color: "#10B981",
    title: { az: "Web", en: "Web" },
    desc: { az: `Müasir və performanslı veb saytlar, veb tətbiqlər və e-ticarət platformaları. Responsive dizayn və istifadəçi dostu interfeyslər.`, en: `Modern, high-performance websites, web apps and e-commerce platforms. Responsive design and user-friendly interfaces.` },
    items: [
      {
        id: "web-1",
        title: L(`Web-Saytların Hazırlanması`),
        desc: L(`Biznesin rəqəmsal imicini gücləndirən, satış və təqdimat məqsədli peşəkar veb-saytların hazırlanması.`),
        whatIs: L(`Web-Saytların Hazırlanması — biznesin rəqəmsal mühitdə necə təqdim olunacağını, müştərinin sizi necə tapacağını və sayt üzərindən necə satış və müraciət yaradacağını müəyyən edən strateji texnoloji prosesdir. Müasir biznes üçün sayt sadəcə vizit kartı deyil. Sayt müştərinin ilk təmas nöqtəsidir, etibarın əsas mənbəyidir, satış və marketinqin mərkəzidir. Web-sayt dizayn edilmiş səhifə yox, satış və böyümə alətidir.`),
        whyImportant: L(`Bir çox biznesdə sayt mövcuddur, dizayn edilib, məlumat yerləşdirilib, amma müştəri yazmır, satış gəlmir, sayt Google-da görünmür, etibar yaratmır. Bunun səbəbi saytın olmasında yox, strateji və satış yönümlü qurulmamasındadır.`),
        howItWorks: [
          {
            title: L(`1. Etibar və peşəkar imic`),
            description: L(`Peşəkar sayt müştərinin sizə güvənməsini artırır, qərar verməni sürətləndirir. İlk təəssürat satışın əsas hissəsidir.`),
          },
          {
            title: L(`2. Satış və müraciətlərin artması`),
            description: L(`Satış yönümlü sayt müştərini yönləndirir, CTA vasitəsilə hərəkətə keçirir, müraciətləri artırır. Sayt aktiv satış işçisi kimi işləyir.`),
          },
          {
            title: L(`3. SEO ilə uzunmüddətli müştəri axını`),
            description: L(`SEO-ya uyğun sayt Google-da görünürlük yaradır, reklamsız trafik gətirir, uzunmüddətli müştəri axını təmin edir. Bu, marketinq xərclərinin uzunmüddətli azalması deməkdir.`),
          },
          {
            title: L(`4. Marketinq və reklam effektivliyinin yüksəlməsi`),
            description: L(`Reklam sayta yönələndə dönüş faizi artır, büdcə daha səmərəli xərclənir. Zəif sayt reklama mane olur, güclü sayt isə reklama dəstək verir.`),
          },
          {
            title: L(`5. Biznesin böyüməyə hazır olması`),
            description: L(`Yaxşı qurulmuş sayt yeni xidmətlərin əlavə olunmasına, yeni bazarlara çıxışa, texniki genişlənməyə hazır olur.`),
          },
        ],
        benefits: [
          L(`Biznes məqsədlərinə uyğun fərdi dizayn`),
          L(`Sürətli və təhlükəsiz texniki struktur`),
          L(`Mobil və planşetlərə tam uyğunluq`),
          L(`İstifadəçi üçün sadə və anlaşılan interfeys`),
          L(`Satışa və müraciətə yönəldilmiş səhifə quruluşu`),
          L(`Brend etibarının və onlayn görünürlüyün artması`),
        ],
        forWho: L(`Bu xidmət bütün bizneslər üçün vacibdir: korporativ şirkətlər, xidmət sahələri, B2B və B2C bizneslər, yeni startaplar. Əgər saytınız müştəri gətirmirsə, satış yaratmırsa, Google-da görünmürsə, problem saytın strateji qurulmamasındadır.`),
        conclusion: L(`Zəif sayt müştəri itirir, reklamı boşa çıxarır. Düzgün qurulmuş Web-Sayt isə etibar yaradır, satışları artırır, biznesi böyüdür.`),
      },
      {
        id: "web-2",
        title: L(`İnternet Mağazaların Yaradılması (E-commerce)`),
        desc: L(`Onlayn satışları artırmaq üçün funksional və etibarlı internet mağazalarının hazırlanması.`),
        whatIs: L(`İnternet Mağazaların Yaradılması (E-commerce) — məhsul və ya xidmətlərin online mühitdə 24/7 satılmasını təmin edən, ödəniş, sifariş, stok və müştəri proseslərini tam avtomatlaşdıran satış sistemidir. Müasir dövrdə e-commerce sadəcə alternativ satış kanalı deyil. E-commerce satışın davamlı mənbəyidir, coğrafi məhdudiyyəti aradan qaldırır, biznesi miqyaslana bilən edir. İnternet mağaza məhsul sərgilənən sayt yox, satış istehsal edən sistemdir.`),
        whyImportant: L(`Bir çox biznesdə məhsulu var, bazarı var, tələbi var, amma satış yalnız fiziki məkandan asılıdır, sosial media üzərindən qeyri-sistemli satış edir, sifariş və stok qarışıqlığı yaşayır. Bu isə satış imkanlarının itirilməsi, vaxt və resurs itkisi, böyümənin ləngiməsi deməkdir.`),
        howItWorks: [
          {
            title: L(`1. 24/7 fasiləsiz satış`),
            description: L(`İnternet mağaza iş saatından asılı deyil, eyni anda yüzlərlə sifariş qəbul edir. Bu, satışın avtomatlaşdırılması deməkdir.`),
          },
          {
            title: L(`2. Satışların və gəlirin artması`),
            description: L(`Online satış daha geniş auditoriyaya çıxış, daha çox sifariş imkanı yaradır. Biznes lokal sərhədləri aşır.`),
          },
          {
            title: L(`3. Stok və sifarişlərin avtomatik idarə edilməsi`),
            description: L(`E-commerce sistemi stok qalığını avtomatik yeniləyir, sifarişləri qeyd edir, səhvləri minimuma endirir. Bu, zamana qənaət etmək və işçi xərclərinin azalması deməkdir.`),
          },
          {
            title: L(`4. Reklam və marketinq effektivliyinin yüksəlməsi`),
            description: L(`Reklam e-commerce saytına yönləndikdə dönüş faizi artır, müştəri davranışı izlənir, kampaniyalar optimallaşdırılır.`),
          },
          {
            title: L(`5. Biznesin miqyaslana bilməsi`),
            description: L(`Yaxşı qurulmuş e-commerce məhsul sayının artırılmasına, yeni bazarlara çıxışa, beynəlxalq satışa hazır olur.`),
          },
        ],
        benefits: [
          L(`Məhsul qalığının və sifarişlərin rahat idarə edilməsi`),
          L(`Onlayn ödəniş sistemlərinin inteqrasiyası`),
          L(`Səbət və sifariş prosesinin optimallaşdırılması`),
          L(`Mobil istifadəçilər üçün rahat alış təcrübəsi`),
          L(`Satış statistikasının və hesabatların izlənməsi`),
          L(`Onlayn satış potensialının artması`),
        ],
        forWho: L(`Bu xidmət xüsusilə fiziki məhsul satan bizneslər, pərakəndə satış şirkətləri, distribusiya şirkətləri, rəqəmsal məhsul satan brendlər üçün vacibdir. Əgər satışınız yalnız fiziki məkandan asılıdırsa, sifariş prosesləri qarışıqdırsa, online satış sistemi yoxdursa, e-commerce artıq zəruridir.`),
        conclusion: L(`Fiziki satışla məhdud biznes zamanla yarışa bilmir, bazarı itirir. Düzgün qurulmuş İnternet Mağaza (E-commerce) isə satışı artırır, xərcləri azaldır, biznesi böyüdür.`),
      },
      {
        id: "web-3",
        title: L(`Mobil Tətbiqlərin Hazırlanması`),
        desc: L(`iOS və Android platformaları üçün biznesə uyğun mobil tətbiqlərin hazırlanması.`),
        whatIs: L(`Mobil Tətbiqlərin Hazırlanması — biznesin müştəri ilə birbaşa, sürətli və daimi əlaqə qurmasını təmin edən, satış, xidmət və idarəetmə proseslərini mobil platformaya daşıyan rəqəmsal həllərdir. Bugünkü istifadəçi davranışı göstərir ki müştərilər daha çox mobil telefondan istifadə edir, sürətli və rahat tətbiqləri seçir, brauzerdən çox tətbiq üzərindən ünsiyyət qurur. Mobil tətbiq sadəcə texnoloji məhsul yox, müştəriyə ən yaxın satış və xidmət kanalıdır.`),
        whyImportant: L(`Bir çox biznesdə sayt sahibidir, sosial mediada aktivdir, reklam edir, amma müştəri ilə daimi əlaqə qura bilmir, sifariş və xidmət proseslərini mobil səviyyədə optimallaşdıra bilmir, müştəri sədaqətini itirir. Bu isə təkrar satışların azalması, müştərinin rəqibə keçməsi, xidmət keyfiyyətinin zəifləməsi ilə nəticələnir.`),
        howItWorks: [
          {
            title: L(`1. Müştəri ilə daimi əlaqə`),
            description: L(`Mobil tətbiq telefonun içindədir, bildiriş göndərir, müştərini aktiv saxlayır. Bu, təkrar satışların artması deməkdir.`),
          },
          {
            title: L(`2. Satış və xidmət proseslərinin sürətlənməsi`),
            description: L(`Mobil tətbiq sifarişi asanlaşdırır, vaxt itkisini azaldır, müştəri məmnuniyyətini artırır.`),
          },
          {
            title: L(`3. İşçi xərclərinin azalması`),
            description: L(`Avtomatlaşdırılmış mobil proseslər manuel işləri azaldır, səhvləri minimuma endirir, insan resursuna qənaət edir.`),
          },
          {
            title: L(`4. Brendə bağlılığın artması`),
            description: L(`Mobil tətbiqi olan brendlər daha peşəkar görünür, müştərinin yaddaşında qalır, rəqiblərdən seçilir.`),
          },
          {
            title: L(`5. Biznesin miqyaslana bilməsi`),
            description: L(`Yaxşı qurulmuş mobil tətbiq yeni funksiyalarla genişlənir, digər sistemlərlə inteqrasiya olunur, böyüyən biznesə uyğunlaşır.`),
          },
        ],
        benefits: [
          L(`Müştərilərlə birbaşa əlaqə imkanı`),
          L(`Sürətli və stabil işləyən tətbiqlər`),
          L(`İstifadəçi təcrübəsinə uyğun dizayn`),
          L(`Push bildirişləri ilə aktiv kommunikasiya`),
          L(`Brendə sadiqliyin artırılması`),
          L(`Rəqiblər qarşısında üstünlük əldə edilməsi`),
        ],
        forWho: L(`Bu xidmət xüsusilə müştəri ilə daimi əlaqə qurmaq istəyən bizneslər, e-commerce sahibləri, xidmət sahələri, otellər, klinikalar, təlim mərkəzləri, rəqabətli bazarda fərqlənmək istəyən şirkətlər üçün vacibdir. Əgər müştəri ilə əlaqə zəifdirsə, sifariş prosesləri mobil üzərindən optimallaşdırılmayıbsa, müştəri sədaqəti itirilibsə, mobil tətbiq artıq zəruridir.`),
        conclusion: L(`Mobil həlli olmayan biznes müştərini itirir, rəqiblərdən geri düşür. Düzgün hazırlanmış Mobil Tətbiq isə satışı artırır, müştəri sədaqəti yaradır, biznesi gələcəyə daşıyır.`),
      },
      {
        id: "web-4",
        title: L(`SEO Xidmətləri`),
        desc: L(`Veb-saytların Google və digər axtarış platformalarında daha üst sıralarda çıxması üçün peşəkar SEO həlləri.`),
        whatIs: L(`SEO (Search Engine Optimization) — veb-saytın Google və digər axtarış sistemlərində ödənişsiz şəkildə yuxarı sıralarda görünməsini, daha çox potensial müştəri cəlb etməsini və satışa çevrilməsini təmin edən strateji rəqəmsal marketinq prosesidir. SEO sadəcə "Google-da çıxmaq" deyil. SEO düzgün auditoriyanı tapmaq, doğru zamanda görünmək, müştərini sayta gətirib qərara yönləndirmək deməkdir. SEO reklama davamlı pul xərcləmədən stabil müştəri axını yaradan sistemdir.`),
        whyImportant: L(`Bir çox biznesdə reklam verir, büdcə xərcləyir, kampaniyalar edir, amma reklam dayanan kimi müraciətlər kəsilir, uzunmüddətli müştəri axını yoxdur, Google-da rəqiblər önə çıxır. Bu problemin kökü SEO-nun olmamasıdır.`),
        howItWorks: [
          {
            title: L(`1. Davamlı və ödənişsiz müştəri axını`),
            description: L(`SEO reklamdan fərqli olaraq dayanmır, zaman keçdikcə güclənir, stabil trafik yaradır.`),
          },
          {
            title: L(`2. Marketinq xərclərinin azalması`),
            description: L(`SEO olan biznes reklama daha az pul xərcləyir, eyni büdcə ilə daha çox nəticə alır. Bu, uzunmüddətli qənaət deməkdir.`),
          },
          {
            title: L(`3. Daha keyfiyyətli müştərilər`),
            description: L(`SEO ilə gələn müştəri özü sizi axtarır, ehtiyaclıdır, satın almağa daha yaxındır.`),
          },
          {
            title: L(`4. Rəqabətdə üstünlük`),
            description: L(`SEO sizi rəqiblərin önünə çıxarır, bazarda mövqe yaradır, brendi gücləndirir.`),
          },
          {
            title: L(`5. Satışların artması`),
            description: L(`Düzgün qurulmuş SEO daha çox ziyarətçi, daha çox müraciət, daha çox satış yaradır.`),
          },
        ],
        benefits: [
          L(`Orqanik ziyarətçi sayının artması`),
          L(`Düzgün açar söz strategiyası`),
          L(`Texniki və məzmun əsaslı optimallaşdırma`),
          L(`Uzunmüddətli və stabil nəticələr`),
          L(`Reklam xərclərindən asılılığın azalması`),
          L(`Brendin onlayn etibarının güclənməsi`),
        ],
        forWho: L(`Bu xidmət bütün online fəaliyyət göstərən bizneslər üçün vacibdir: korporativ saytlar, e-commerce platformaları, xidmət sahələri, lokal bizneslər. Əgər saytınız Google-da görünmürsə, reklam dayandıqda müraciət kəsilibsə, rəqiblər önə çıxıbsa, SEO qaçılmaz ehtiyacdır.`),
        conclusion: L(`SEO olmayan biznes müştəri itirir, rəqiblərin kölgəsində qalır. Düzgün qurulmuş SEO Xidmətləri isə brendi gücləndirir, satışı artırır, biznesi böyüdür.`),
      },
    ],
  },
  {
    id: "ai-automation",
    color: "#EF4444",
    title: { az: "AI Avtomatlaşdırma", en: "AI Automation" },
    desc: { az: `Müasir süni intellekt texnologiyaları ilə biznes proseslərinizi tam avtomatlaşdırın. Chatbotlar, məlumat analizi, proqnozlaşdırma və daha çox.`, en: `Fully automate your business processes with modern AI. Chatbots, data analysis, forecasting and more.` },
    items: [
      {
        id: "ai-automation-1",
        title: L(`AI Chat Bot (Sosial Media Satış Botu)`),
        desc: L(`Sosial media üzərindən gələn mesaj və rəyləri müştərinin psixologiyasına uyğun cavablayan və satışı həyata keçirən ağıllı sistem.`),
        whatIs: L(`AI Chat Bot – sosial media platformalarında (Instagram, Facebook, WhatsApp və s.) müştərilərdən gələn mesajları süni intellekt vasitəsilə avtomatik cavablayan, müştərinin ehtiyacını anlayan və satışı yönləndirən ağıllı satış sistemidir. Bu sistem klassik "hazır cavab botu" deyil. AI Chat Bot müştərinin sualını anlayır, yazı tərzinə və niyyətinə uyğun cavab verir, dialoqu mərhələli şəkildə satışa aparır, heç bir müraciəti cavabsız qoymur.`),
        whyImportant: L(`Bu gün müştərilərin böyük əksəriyyəti birbaşa zəng etmir, e-mail yazmır, əvvəlcə sosial mediadan mesaj atır. Ən böyük problem isə budur: gec cavab = itirilmiş satış. AI Chat Bot bu problemi tam aradan qaldırır: 24/7 aktivdir, saniyələr içində cavab verir, eyni anda onlarla müştəri ilə danışa bilir.`),
        howItWorks: [
          {
            title: L(`1. Hər mesaj real satış imkanına çevrilir`),
            description: L(`Ən çox satış itkiləri cavabsız və ya gec cavablanan mesajlara görə baş verir. AI Chat Bot gələn hər mesajı avtomatik qarşılayır, müştərini düzgün istiqamətləndirir, satış prosesini yarımçıq qoymur. Nəticə: itirilən müştəri sayı minimuma enir.`),
          },
          {
            title: L(`2. Müştərinin psixologiyasına uyğun cavab verir`),
            description: L(`AI Chat Bot aqressiv satmır, müştərini sıxmır, ehtiyacına uyğun danışır. Bu, klassik satış skriptlərindən fərqli olaraq daha təbii və etibarlı dialoq yaradır. Müştəri özünü robotla yox, real satış meneceri ilə danışırmış kimi hiss edir.`),
          },
          {
            title: L(`3. Satış komandası üçün real dəstəkdir`),
            description: L(`AI Chat Bot satış əməkdaşlarını əvəz etmək üçün yox, onların yükünü azaltmaq üçün qurulur. Bot ilkin sualları cavablayır, maraqlı müştəriləri ayırır, real satışa hazır olanları komandaya ötürür. Bu, satış komandasının daha keyfiyyətli müştərilərlə işləməsinə imkan yaradır.`),
          },
          {
            title: L(`4. Eyni anda limitsiz müştəri ilə işləyir`),
            description: L(`Kampaniya, endirim və reklam dövrlərində mesaj sayı kəskin artır. İnsan resursu bu yükü daşıya bilmir. AI Chat Bot isə paralel şəkildə yüzlərlə yazışmanı idarə edir, heç bir müştərini gözlətmir, performans itirmir.`),
          },
          {
            title: L(`5. Brend etibarını gücləndirir`),
            description: L(`Daim vaxtında, nəzakətli və peşəkar cavab verən brend daha etibarlı görünür, müştəri məmnuniyyətini artırır, təkrar alış ehtimalını yüksəldir. AI Chat Bot bu standartı sabit şəkildə qoruyur.`),
          },
        ],
        benefits: [
          L(`Instagram və Facebook mesajlarına 24/7 avtomatik cavab`),
          L(`Müştərinin yazı tərzinə və niyyətinə uyğun fərdi cavablar`),
          L(`Satışa yönəldilmiş dialoq strukturu`),
          L(`İnsan faktoru və gec cavab riskinin aradan qaldırılması`),
          L(`Müştəri məmnuniyyətinin və satış ehtimalının artması`),
          L(`Sosial media üzərindən gələn potensial müştərilərin itirilməməsi`),
        ],
        forWho: L(`AI Chat Bot xüsusilə aşağıdakı sahələrdə yüksək nəticə verir: xidmət sektorları, onlayn satış edən şirkətlər, otellər və rezervasiya biznesləri, klinikalar və təlim mərkəzləri, sosial mediadan aktiv satış edən bütün bizneslər. Əgər müştəriləriniz sizə yazırsa, AI Chat Bot artıq ehtiyacdır.`),
        conclusion: L(`AI Chat Bot sizə daha çox cavablanmış mesaj, daha az itirilmiş müştəri, daha yüksək satış dönüşü, daha az işçi yükü, daha peşəkar brend imici qazandırır. Bu sistem bir dəfə qurulur və davamlı şəkildə biznes üçün işləyir.`),
      },
      {
        id: "ai-automation-2",
        title: L(`Korporativ Satış Mütəxəssisləri üçün AI Soyuq Satış Sistemi`),
        desc: L(`Korporativ satış mütəxəssislərinin öz müştəri bazaları üzərindən avtomatik soyuq satış e-mailləri göndərməsini və geri dönüşlərin izlənməsini təmin edən AI həlli.`),
        whatIs: L(`AI Soyuq Satış Sistemi — korporativ satış mütəxəssislərinin və satış komandalarının potensial müştəriləri daha sürətli tapması, onlarla sistemli şəkildə əlaqə qurması və satışa çevirməsi üçün hazırlanmış süni intellekt əsaslı avtomatlaşdırma həllidir.`),
        whyImportant: L(`Ənənəvi soyuq satış prosesində potensial müştəri tapmaq çox vaxt aparır, e-mail-lərə geri dönüş faizi aşağı olur, WhatsApp və zənglər gecikdirilir, görüşlər dağınıq planlanır.`),
        howItWorks: [
          {
            title: L(`Potensial müştərilərin avtomatik seçimi`),
            description: L(`İstifadəçi öz bazasını (Excel və ya Google Sheets) sistemə əlavə edir. AI şirkət adlarını analiz edir, sahə və fəaliyyət istiqamətini müəyyənləşdirir, uyğun müştəri profilini ayırır.`),
          },
          {
            title: L(`AI tərəfindən soyuq e-mail göndərişi`),
            description: L(`Sistem seçilmiş müştərilərə peşəkar, fərdiləşdirilmiş, satış məqsədli soyuq e-mail-lər göndərir. E-mail-lər spam görünmür, klassik kopyala-yapışdır mətnlər deyil.`),
          },
          {
            title: L(`Geri dönüşlərin avtomatik izlənməsi (mini CRM)`),
            description: L(`AI kim cavab verdi, kim maraq göstərdi, kim cavabsız qaldı bütün bu məlumatları Google Sheets üzərindən CRM kimi qeyd edir.`),
          },
          {
            title: L(`WhatsApp üzərindən dialoqun davamı`),
            description: L(`Potensial müştəri WhatsApp-dan yazdıqda AI avtomatik cavab verir, sualları cavablandırır, marağı dərinləşdirir, satışı növbəti mərhələyə aparır.`),
          },
          {
            title: L(`Görüş təyini və Google Calendar inteqrasiyası`),
            description: L(`Müştəri görüşə hazır olduqda sistem avtomatik görüş vaxtı təyin edir, Google Calendar-a əlavə edir, həm müştəriyə, həm satış mütəxəssisinə bildiriş göndərir.`),
          },
        ],
        benefits: [
          L(`İstifadəçinin Excel faylı əsasında avtomatik e-mail göndərişi`),
          L(`Peşəkar soyuq satış mətnlərinin AI tərəfindən hazırlanması`),
          L(`Geri dönüşlərin Google Sheets-də avtomatik qeydiyyatı`),
          L(`Sadə və effektiv CRM strukturu`),
          L(`Satış prosesinin sürətlənməsi`),
          L(`Satış mütəxəssisinin operativliyinin artması`),
        ],
        forWho: L(`Bu sistem korporativ satış mütəxəssisləri, satış komandaları, B2B satış edən şirkətlər üçün idealdır.`),
        conclusion: L(`AI Soyuq Satış Sistemi satışa təsadüfi yox, sistemli yanaşma gətirir. Bu sistem satış mütəxəssisini robotlaşdırmır, əksinə onu strateji satışçıya çevirir.`),
      },
      {
        id: "ai-automation-3",
        title: L(`Hotel AI ChatBot (Avtomatik Rezervasiya Sistemi)`),
        desc: L(`Otellərə sosial media və mesajlaşma platformalarından gələn sorğuları cavablayan, boş otaqları təyin edən və avtomatik rezervasiya həyata keçirən ağıllı sistem.`),
        whatIs: L(`Hotel AI ChatBot — hotellərə sosial media və messencerlər üzərindən (Instagram, Facebook, WhatsApp və s.) daxil olan müraciətləri süni intellekt vasitəsilə avtomatik cavablayan, boş otaqları real vaxtda müəyyən edən və müştərinin istəyinə uyğun rezervasiyanı avtomatik həyata keçirən ağıllı sistemdir. Bu sistem klassik "mesaj cavablayan bot" deyil. Hotel AI ChatBot müştərinin sualını anlayır, tarix, saat, otaq növü və qiymət əsasında uyğun təklif verir, boş otaqları yoxlayır, rezervasiyanı avtomatik qeyd edir, həm müştəriyə, həm otelə məlumat göndərir.`),
        whyImportant: L(`Otellərdə satış itkisi çox vaxt bu səbəblərdən yaranır: gec cavablanan mesajlar, gecə saatlarında cavabsız müraciətlər, işçi çatışmazlığı, qarışıq rezervasiya qeydləri, telefon və sosial media arasında dağınıq idarəetmə. Nəticə: müştəri başqa otelə keçir, otaq boş qalır, potensial gəlir itirilir. Hotel AI ChatBot bu problemləri tam avtomatik şəkildə aradan qaldırır.`),
        howItWorks: [
          {
            title: L(`1. 24/7 fasiləsiz rezervasiya qəbulu`),
            description: L(`Hotel AI ChatBot gecə-gündüz işləyir, istirahət günü tanımır, müştəriyə saniyələr içində cavab verir. Bu isə xüsusilə gecə saatlarında, son dəqiqə rezervasiyalarında, kampaniya dövrlərində rezervasiya sayının artmasına birbaşa təsir edir.`),
          },
          {
            title: L(`2. Boş otaqlar avtomatik müəyyən olunur`),
            description: L(`Sistem Google Sheets və ya otelin rezervasiya cədvəli ilə işləyir, seçilən tarix və saat aralığında boş otaqları tapır, müştəriyə uyğun variantları təklif edir. Əgər istənilən otaq doludursa, AI avtomatik alternativ otaqları təklif edir. Bu da "yox" cavabını satış fürsətinə çevirir.`),
          },
          {
            title: L(`3. Saatlıq və sutkalıq rezervasiyalar üçün uyğundur`),
            description: L(`Hotel AI ChatBot 4 saatlıq, 6 saatlıq, 12 saatlıq, 24 saatlıq və sutkalıq rezervasiya modellərini dəstəkləyir. Bu xüsusiyyət şəhər hotelləri, saatlıq xidmət göstərən obyektlər, yüksək dövriyyəli hotellər üçün ciddi üstünlük yaradır.`),
          },
          {
            title: L(`4. İşçi yükünü azaldır, səhvləri minimuma endirir`),
            description: L(`Manual rezervasiya zamanı tarix səhvləri, otaq qarışıqlığı, ikiqat bronlama tez-tez baş verir. Hotel AI ChatBot isə bütün məlumatları avtomatik qeyd edir, rezervasiyanı sistemli saxlayır, insan faktorundan qaynaqlanan səhvləri aradan qaldırır. Bu, işçi xərclərinin azalması və zamana qənaət etmək deməkdir.`),
          },
          {
            title: L(`5. Müştəri təcrübəsini yüksəldir`),
            description: L(`Müştəri sürətli cavab alır, aydın məlumat görür, prosesin sonunda təsdiq mesajı alır. Bu, otelin peşəkar görünməsinə, etibar qazanmasına, təkrar rezervasiya ehtimalının artmasına birbaşa təsir edir.`),
          },
        ],
        benefits: [
          L(`Instagram, Facebook və WhatsApp mesajlarına ani cavab`),
          L(`Boş otaqların real vaxtda müəyyən edilməsi`),
          L(`Müştərinin istəklərinə uyğun otaq təklifləri`),
          L(`Avtomatik bron və qeydiyyat`),
          L(`Rezervasiya barədə otelə dərhal bildiriş`),
          L(`Rezervasiya səhvlərinin və insan faktorunun aradan qaldırılması`),
          L(`Rezervasiya sayının artması`),
        ],
        forWho: L(`Bu sistem xüsusilə aşağıdakılar üçün idealdır: şəhər hotelləri, butik hotellər, saatlıq rezervasiya qəbul edən obyektlər, sosial mediadan aktiv müraciət alan hotellər, kiçik və orta ölçülü otellər. Əgər otelinizə Instagram, Facebook, WhatsApp üzərindən tez-tez mesaj gəlirsə, Hotel AI ChatBot artıq ehtiyacdır.`),
        conclusion: L(`Hotel AI ChatBot sizə daha çox rezervasiya, daha az boş otaq, daha az işçi yükü, daha sürətli cavablar, daha yüksək müştəri məmnuniyyəti qazandırır. Bu sistem bir dəfə qurulur və hər gün otel üçün işləyir.`),
      },
      {
        id: "ai-automation-4",
        title: L(`AI SMM + ChatBot Sistemi`),
        desc: L(`Sosial media kontentini avtomatik yaradan, paylaşan, analiz edən və eyni zamanda mesajlar üzərindən satış edən kompleks AI sistemi.`),
        whatIs: L(`AI SMM + ChatBot Sistemi — sosial media hesablarının idarə olunmasını, kontent istehsalını, paylaşımların analizini və müştərilərlə yazışma üzərindən satışı süni intellekt vasitəsilə avtomatlaşdıran kompleks marketinq və satış həllidir. Bu sistem ayrı-ayrı alətlərdən ibarət deyil. AI SMM + ChatBot Sistemi sosial media üçün kontent yaradır, paylaşımları planlı şəkildə yayımlayır, nəticələri analiz edir, özünü təkmilləşdirir, gələn mesaj və rəyləri cavablayır, müştərini satışa yönləndirir. Yəni bu sistem SMM + satış + müştəri xidməti funksiyalarını vahid platformada birləşdirir.`),
        whyImportant: L(`Bir çox biznes sosial mediada aktivdir, amma nəticə almır. Bunun əsas səbəbləri: plansız paylaşımlar, zəif kontent strategiyası, gec cavablanan mesajlar, rəy və şərhlərin nəzarətsiz qalması, SMM ilə satışın bir-birindən ayrı idarə olunmasıdır. Nəticə: izləyici var, satış yoxdur; mesaj gəlir, cavab gecikir; kontent paylaşılır, amma təsir yaratmır. AI SMM + ChatBot Sistemi bu parçalanmış prosesi vahid və ağıllı sistemə çevirir.`),
        howItWorks: [
          {
            title: L(`1. Avtomatik və strategiyalı kontent istehsalı`),
            description: L(`AI biznesin sahəsini analiz edir, hədəf auditoriyanı müəyyənləşdirir, kontent ideyaları yaradır, paylaşım mətnlərini formalaşdırır. Bu, təsadüfi postlar yox, məqsədli və satışa yönəlmiş kontent deməkdir.`),
          },
          {
            title: L(`2. Paylaşımların planlı yayımlanması`),
            description: L(`AI SMM postları optimal vaxtlarda paylaşır, davamlılığı qoruyur, səhifənin aktivliyini stabil saxlayır. Bu isə sosial media alqoritmləri baxımından daha çox görünürlük yaradır.`),
          },
          {
            title: L(`3. Analiz və özünü təkmilləşdirmə`),
            description: L(`Sistem hansı postun daha çox maraq gördüyünü, hansı kontentin satışa daha çox təsir etdiyini, hansı mesajların cavab yaratdığını analiz edir və növbəti kontenti buna uyğun formalaşdırır. Bu, klassik SMM-dən fərqli olaraq datalı və ağıllı marketinq yanaşmasıdır.`),
          },
          {
            title: L(`4. ChatBot satış prosesinə qoşulur`),
            description: L(`AI ChatBot paylaşımlar altına gələn şərhləri cavablayır, inbox mesajlarını avtomatik qarşılayır, müştərinin ehtiyacını anlayır, dialoqu satışa doğru aparır. Yəni SMM sadəcə "bəyənmə" yaratmır, birbaşa satış mexanizminə çevrilir.`),
          },
          {
            title: L(`5. İşçi yükü və xərclər azalır`),
            description: L(`AI SMM menecerinin işinin böyük hissəsini avtomatlaşdırır, satış komandası üçün filtr rolunu oynayır, əlavə işçi ehtiyacını azaldır. Bu, işçi xərclərinin azalması və zamana qənaət etmək deməkdir.`),
          },
        ],
        benefits: [
          L(`Avtomatik post və məzmun yaradılması`),
          L(`Paylaşımların performansının analizi`),
          L(`Sistem tərəfindən özünü daim təkmilləşdirmə`),
          L(`Mesaj və rəylərin avtomatik cavablandırılması`),
          L(`Satışa yönəlik sosial media idarəçiliyi`),
          L(`SMM xərclərinin azalması və effektivliyin artması`),
        ],
        forWho: L(`Bu sistem xüsusilə xidmət sektoru, onlayn satış edən şirkətlər, klinikalar və təlim mərkəzləri, otellər, şəxsi brendlər, sosial mediadan aktiv müştəri alan bütün bizneslər üçün idealdır. Əgər biznesiniz sosial mediadan müştəri cəlb edirsə, bu sistem birbaşa gəlir alətidir.`),
        conclusion: L(`AI SMM + ChatBot Sistemi sizə daha çox görünürlük, daha yüksək müştəri etibarı, daha çox mesaj və müraciət, daha çox satış, daha az əməliyyat yükü qazandırır. AI SMM + ChatBot Sistemi bir dəfə qurulur və davamlı olaraq biznes üçün işləyir.`),
      },
      {
        id: "ai-automation-5",
        title: L(`SmartClinic AI – Həkimlər üçün Pasiyent İdarəetmə Sistemi`),
        desc: L(`Həkimlər üçün tam funksiyalı AI asistanı və pasiyent CRM sistemi. 7/24 işləyən ağıllı sistem pasiyentlərin idarə olunmasını tam avtomatlaşdırır.`),
        whatIs: L(`SmartClinic AI — həkimlər üçün tam funksiyalı AI asistanı və pasiyent CRM sistemidir. Bu sistem sadəcə mesajlara cavab verən bir bot deyil. SmartClinic AI klinikanızda pasiyentlə bağlı görülən işlərin böyük hissəsini öz üzərinə götürür, siz isə yalnız əsas işinizə — müayinəyə və müalicəyə fokuslanırsınız. AI asistan gecə-gündüz, fasiləsiz işləyir və pasiyentlə ilk təmasdan sonrakı mərhələyədək prosesi idarə edir.`),
        whyImportant: L(`Klinikalarda ən böyük problemlərdən biri pasiyent məlumatlarının mesajlarda itib-batması, gəlməyən pasiyentlərin sayının yüksək olması, qəbul saatlarının planlı keçirilməməsi və texniki işlərə çox vaxt sərf olunmasıdır. SmartClinic AI bu problemlərin hamısını avtomatik şəkildə həll edir. Sistem hər pasiyenti CRM-də qeyd edir, qəbul saatlarını planlaşdırır, xatırlatmalar göndərir, gəlməyən pasiyentləri izləyir, müayinədən sonra vəziyyəti soruşur. Nəticədə həkim texniki işlərdən azad olur və yalnız müayinəyə fokuslanır.`),
        howItWorks: [
          {
            title: L(`1. AI asistan pasiyenti qarşılayır və məlumat toplayır`),
            description: L(`Pasiyent yazan kimi AI onu qarşılayır, suallar verir, müraciətini anlayır, məlumatlarını toplayır, uyğun qəbul vaxtını təklif edir. Bütün bu proseslər insan müdaxiləsi olmadan baş verir. AI sistem katibin, asistentin və qeydiyyatın gördüyü işi tam şəkildə əvəz edir.`),
          },
          {
            title: L(`2. Hər pasiyent avtomatik olaraq CRM-də qeyd olunur`),
            description: L(`Sistemdə hər pasiyent avtomatik olaraq CRM-də qeyd olunur. CRM-də hər pasiyent üçün adı və əlaqə məlumatı, müraciət səbəbi (AI tərəfindən qısa və anlaşılan şəkildə yazılır), qəbul tarixi, gəlib-gəlmədiyi, son vəziyyəti, növbəti addımı aydın şəkildə görünür. Həkim artıq "kim idi bu pasiyent?", "nə üçün yazmışdı?", "nə vaxt gələcəkdi?" kimi suallarla vaxt itirmir.`),
          },
          {
            title: L(`3. Gəlməyən pasiyent problemi həll olunur`),
            description: L(`AI sistem qəbul saatlarını qorumaq üçün əvvəlcədən xatırlatma göndərir, cavab gəlməzsə yenidən əlaqə yaradır, pasiyentə vaxtı dəyişmək və ya ləğv etmək imkanı verir. Bu yanaşma boş qalan qəbul saatlarını azaldır, həkimin maddi itkisini minimuma endirir, günü daha planlı edir.`),
          },
          {
            title: L(`4. Müayinədən sonra da asistan işləməyə davam edir`),
            description: L(`AI asistan pasiyenti müayinədən sonra unutmur. Müəyyən vaxt keçdikdən sonra vəziyyətini soruşur, ehtiyac varsa kontrol müayinəsinə çağırır, məmnun pasiyentlərdən rəy istəyir. Bu isə pasiyent məmnuniyyətini artırır, həkimin etibarını gücləndirir, tövsiyə yolu ilə yeni pasiyentlər gətirir.`),
          },
          {
            title: L(`5. AI + CRM birlikdə işləyir`),
            description: L(`AI pasiyentlə danışır, CRM isə yaddaş rolunu oynayır. Yəni AI danışır, məlumat toplayır, qərar verir, CRM isə hər şeyi saxlayır və nizamlayır. Bu birlik sayəsində heç bir pasiyent unudulmur, heç bir müraciət yarımçıq qalmır, bütün proses nəzarətdə olur.`),
          },
        ],
        benefits: [
          L(`7/24 işləyən AI asistan və pasiyent idarəetmə sistemi`),
          L(`Hər pasiyentin avtomatik CRM-də qeydiyyatı`),
          L(`Qəbul saatlarının avtomatik planlaşdırılması və xatırlatmalar`),
          L(`Gəlməyən pasiyentlərin izlənməsi və yenidən əlaqə`),
          L(`Müayinədən sonra pasiyentlərdən vəziyyət sorğusu`),
          L(`Katibin və asistentin işinin tam avtomatlaşdırılması`),
          L(`Pasiyent məlumatlarının itib-batmaması və sistemli idarəetmə`),
        ],
        forWho: L(`Bu AI və CRM əsaslı sistem fərdi çalışan həkimlər, özəl klinikalar, stomatoloji mərkəzlər, estetik və kosmetoloji klinikalar, psixoloqlar və terapevtlər üçün idealdır.`),
        conclusion: L(`SmartClinic AI ilə həkim 7/24 işləyən bir asistana sahib olur, mesaj xaosundan xilas olur, pasiyent itirmir, qəbul saatlarını daha dolu keçirir, vaxtını daha düzgün bölür, gəlirinin artdığını hiss edir. Ən əsası isə — həkim texniki işlərdən azad olur və yalnız müayinəyə fokuslanır.`),
      },
    ],
  },
];
