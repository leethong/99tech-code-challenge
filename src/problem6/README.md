# Problem 6: Architecture
## Task

Write the specification for a software module on the API service (backend application server).

1. Create a documentation for this module on a `README.md` file.
2. Create a diagram to illustrate the flow of execution. 
3. Add additional comments for improvement you may have in the documentation.
4. Your specification will be given to a backend engineering team to implement.

### Software Requirements

1. We have a website with a score board, which shows the top 10 user’s scores.
2. We want live update of the score board.
3. User can do an action (which we do not need to care what the action is), completing this action will increase the user’s score.
4. Upon completion the action will dispatch an API call to the application server to update the score.
5. We want to prevent malicious users from increasing scores without authorisation.


==============================

# Solution: 

## 1. Overview
The goal of this application is to maintain a real-time scoreboard that displays the top 10 users based on their scores. Users increase their scores by performing specific actions. The application must support live updates and implement security mechanisms to prevent unauthorized score manipulation.

## 2. System Components
Frontend (Website): Displays the live-updated scoreboard.

Database: Stores user scores and related metadata.

User service: users management and issue access token for users and prevents unauthorized access.

Score Service: Processes score updates and serves the top 10 scoreboard.

Score Consumer: Consumer user's score change event

Board Consumer: Consumer board change event

Socket service: Enables live updates to clients. We can use the cloud service to reduce the development timeline and resource, such as Firebase Realtime Database,...

[Please check the component diagram here](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=components.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%22QCE5sMqmnffBSADCI93k%22%3E7Vxtc9o4EP41fAxjya98LCRcO9ebyzRz1%2BZTRtjC6GIszhYB%2ButPwhK2LENIMDjJtTMdrLUkpH15tLta0rNH8%2FVvGVrM%2FqARTnrQitY9%2B7oHIbBAwD8EZVNQXN8qCHFGItmpJNyRn1iNlNQliXCudWSUJowsdGJI0xSHTKOhLKMrvduUJvq3LlCMDcJdiBKT%2Bp1EbFZQA9cq6Z8xiWfqm4El38yR6iwJ%2BQxFdFUh2Tc9e5RRyoqn%2BXqEE8E8xZdi3HjP293CMpyyYwb499Yf4ebp%2FpqMPj9OvozHf4ffruQsTyhZyg3%2FleOMU%2B5w9kRCLJfONoofGV2mERZTWj17uJoRhu8WKBRvV1wDOG3G5glvAf44JUkyognNeDulKe80lN%2BHM4bXezcCduzheoXpHLNsw7vIATZ0iyFSpcBAcnhVCggors8qwvEkDUmdiHdTl2zjD5JzL%2BAiHBh8whFXI9mkGZvRmKYouSmpQ52TZZ%2BvlC4k%2F%2F7BjG2kTaAlozp3ObuyzQ8xvu%2B7qn0v59s2rtdaayNbxWLFCg9LgG%2BILrMQH9i5lARDWYzZIQ4FzSLNcIIYedIX0rp8bN9Qc7fP2yOa5ss5FhsNaSY%2BwxlKY%2FGAnwQvmqT6FU04xmmSQAmJU%2F4c8jHceuyh0G%2FCQeSTfDEnUVQIHefkJ5ps5xOiWFCSsu123WHPvT5kIBLh5OASV6piO6Cde83pyuo7YODoJlW0jpaOnPxW7KZiqJ426ZWvT0Cn0xwzQ7i7Fb5e3k7X9vgic8Rrwn5Unu%2FLKXirHCQa1TG3OCOcU0LhujJre49qXcas1SFcMWu%2FYtbiGJtQlEX8c7mIEPtgdu0ctmurbwW2rVsgbMWurxx92sGl7No15P07mj4iwcRkmQsR1QWbP2IWzhqFMuR8HhX%2FuYDgSFD6wrUwiE003yQCsxv%2FAE3fUCc20XyTCMxuoqVWrRObaL5rrrg%2BGjSMBrXRW42mS5aQFI92nrfg8ZSmTLl8Pe6q2XAsBKy5gpwejJzxmGvHMGcZfcSVN9PtP%2F4mQvlsB8fK8LZGektzwggVBjihjNF5g2UyAdqmAVedU75SieUAqrbUHPGVKF8U25qStVjHkDvwC%2FFyvo5FrNNHq9zpc8PfgumXUKxH4EDxpPeao5QHCtED3y1Gc5LGD1OaPTxulbcVn9hVYYc0SdjgE%2FuB6RIrWuvY7BmmeiddrDccWbiBzsU3EFm4HXsyFtRcmb7je8%2B5M6J1Rt%2FEP9I3OTXi2A79lGVoU%2Bkgj5C9RyP0dQ2y9aCcPxQztnosmtHNHQ0fxRHcjrEpFE3wlJ3N9qAH%2B3pc7%2Fim9cHAV72q9rczytYNMDB4%2Bw1HJD%2FgcpD5NqU01FwP4zCpsNf0FY1jq35Wye%2B4JvOY7yohE7G3PERc0OMRCmf4YbvKh9uMRsuQ9fOnuKXcizvQ9dsyZeQ2AKQDzyQf4HcLkDo6us9howr1hNNVRnugy1gPqLTqc4Dqnwiop6VwHMMQoYj1%2FlzgdLtLCXgymhLeIfdcoZcIxIrIE3%2BMxWO%2BnORhRibCE2EzXAkRucdIQjWCr7EyqFHF3l28CPYIcBcvwoEPdS%2By10q4CLRJr3xPn%2BF88aK6fHhv4OBXwcF6F%2BCw59i4EDjYBjgAAQ5faUzSD2K8e9zZMtljD1qxVj1nC2p%2B1RlttZucbfOB%2FAZs7tTIxRSssye4VVMUNi5HlQJ%2BaQgEaiFQULuWfGZZwQUCJttMJNoCL%2BTdJ%2FcR5kQsEUlH4kMAyHPZYn%2Fg6L79iaf%2FpnHAGQHEvMv%2BdPuFE2LE8AptDDH%2Byg1rtDeTG77xgesP%2Fze5YbQgD0pFW4nRgVvLBTfkUS6aCwZ2F0d7mycyPNYL7tYNhgYCfsP%2FLnH%2BQS48Cz06VMjAMaWl0gXNgq4u6AabMvyOJ5wwSkjTzbXKNl4gwYh%2BLjMsdhzjFGeIb2U8FAV2OGsvvwhr0BXYBnR5Dflf91zpReUEvY9KkpwDFPskqh6FbBOU5yRU5DFJzoGMzrHI2CUwAjN5KF39azO3V3gdqtgT6pKpn%2FPThK7CGWdvP0Ic0VCO91ynnKkU0tWvTBruK72GbPzZriuBGVipa993zml%2FX%2FTcGasbbthVEvyd89qzdV67DZdMF%2BU17MSBfXUeuekC%2FvJHg3fsyeB2eTRAp%2BsDXiuw4D6s5QSvEXCbh%2FqRkuu0plslqn%2FZ5Aske2ztTHG4dCbaju%2F0X1i%2BfWZrPBZHO4VR2%2FRGHJFRLwpQPvwvLJ67WQfBAGouTVuV2L7ulLr6BOdLU0CzLko5%2BmX1fU20b6DA06sVeNqB6VletsBT5aveBtaB12Dda36%2F0iI%2BKlV84wBpGoynA%2BRH%2FqmKfdgsrb6q4Dg1bauj7OXStqr4oiLeoZRnO3jYAvg5QE8WubBr8FNVod2BnxVo8Ne3wKA9CPQvhoFK%2FZ537OGJIPiqkhBD87zDNSGufaj7eWpCHLOGLBAAPckoikIk7tA%2BNEQ7ezSjLDDz%2FNqtmNMKZju1X%2FM7p2M2b5Z%2FV6HoXv51CvvmPw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

## 3. Work flows

### 1. Login

**Goals**: user login

**API spec**:
    Method: POST

    Endpoint:  ~/user-service/v1/users

    Eequest payload:

    {
        userName: string,
        password: string
    }
    
    Response payload: 

    {
        user: {} // user information,
        accessToken: string,
        refreshToken: string
    }


**Sequence Diagram**: 
[ Please Check it here](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=login.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%222YBvvXClWsGukQMizWep%22%3E7V1bd5s4EP41Pmf3wT7csR%2FjS9uck5ztJt3tvmIj2zQYuSBf0l%2B%2FEkg2QgITGxyH8tKaQciE%2BeabmU8i6eij1f5z6KyXj9AFfkdT3H1HH3c0TVXUPv6PWF4Ti2kriWERei4ddDQ8e78Au5JaN54LIm4ggtBH3po3zmAQgBnibE4Ywh0%2FbA59%2FlvXzgIIhueZ44vW756Llom1bypH%2BxfgLZbsm1WFnlk5bDA1REvHhbuUSZ909FEIIUo%2BrfYj4JOHx55Lct2nnLOHGwtBgMpc4DwOwtetvt%2Fa2von3P89fvoy6dJZto6%2FoT%2FwdzCNPAToPaNX9iDw7a%2FJx83Kf%2FDmwPcCfDRcg9BbAQRCfMan5q9H23C3xHM9r50ZuXSHIYJtS7Ty8ZGKP2KvIQdfQi5X8LEbwvU3J1wARA0z6PvOOvKm8W0QSwhmmzDytuAJRAlaiBVuEPnq0QEFxLiGIcKWCIX4O4gROBHagQh%2FHAZgN3Gxp9kPaA87mvVzQ5wxBIcTB1NHv0ud96cwdfVxkDbKDMqZYAtC5GGM5VyKf8AtcLlrFW5ACDeBK4ywx%2FFEWVQwF%2BPvBPuUiaLkM4DYWeErHsLOMsTSkDXo4e6I%2FwPKlyns2xY1OjTmFoepj7DEHygy34BSTUCpAM8UqNYQezu%2BBXPYMccZlGJMLOECBo6fxqkUPyhG4jMBfiQivwXXKVIpjTjD5ABnywAn4q02uOkC3P6JMEo05QEuvKAIeuzZ3%2FneIsC2KUQIrvCJCGMJ3ZF8RCCIZyZODFxmmfpw9sKG0STY58CC8cUDg4FAHx8cfnAuZUrqyOTobb5DjIRPhCS5wUIPh8B3EGZrPjFLPEYv%2FUqC94iMrqVIocFmiOAmnAF6Ucbth7sohYTHmWsOnO0G%2FBWN9v9N4Wj0su6qZss8N8Q8AqOUBXRZ5jHUctQzqIB6pIDTRO5pAddgwFna9QAnvVuR4Giuw%2F9uvVnbB3xo%2FF7UB%2Bg31wdYLTneKLgKueXcPsC6Hje%2BDL8qE%2FC09%2B6%2FPD6%2FLF4mwT2UiCOUG8fDlhabgtw306KpvyMtSnHayiO3Cq5CWjmXFsvyYrZXrqxJMQR4FeoUvA5xBNgDhGuKyR8AoVeqezgbBHkaPCV0dGRShCTKK1cnVJv3jKqXkyeEiXTrxERJrNWmc4hdgNrDx0%2Fg54aErKb4ifJl%2BQTxU5wDrQX5tPMwADVlg9Ni4KxAHCj4uUfRDoauFCUPzhT4vHsdKpb5YJ4OUKahrTzXTXBEMppzTHUikeU2bXR1iF7cOazJpCGSD%2FXcwFR6h%2FUt6jjavl%2BqetkGN2tX1fgp4HwegVqQYH3Q2Ma3HMdakS%2FtjqBt5ufTyslCz5CFfi5ZmH2leKKaycIWyMLoaT38PJR%2FcSi7Dlk8jCnhrQQwwy6Ny42bogCrkAK6Ss%2B0BjbP3pWQALuCccDgWhTQvzEKcJ1oGR%2Bob%2BKDdJgX8EHlcW5m49zOkHfpouDURDlxfheGzmtqGA2S3Bs2zAyfmEoGVsmMlYJsICURLS460CYMknOMTXDcb3zUDD7pnygpNL6i0CohE1XnJu1fi0tUUUO5kzgypZ58CkkheVIaiT0FwskWJA5TinxVohNgpFtiQcjU6Zh0s6UbdXVbrPZLt%2Ffm8H7OIoQlW3MsPFb8HFB9oUGYnGpMZGrc6sMXMII%2BJDpCAGMZYO75fsZUh5ckGsxA0hFnC6XqfHRrZfNZObP6kjfT1prKoGeelwyzrbZkqprLXlWesnQ%2Baf3YNSRNqcV1r9JTbT5Rdaspe3W%2Blr5e2au2S%2B%2B3JKNelCCyxGOwlH1qKcnMh%2BtlCcJ%2BpwSxhKH3iywj1amssNA52XIlAy%2FIM5c5oZ%2FD4ES7uI%2BiDWAErvzhzGYgihJBMwRzzMDLPxtC7Dlt71HQsLjYqYbW%2B3wDcmgM6ud19mCKeJ2ybVLCsn3%2Bqrx%2BLStXR7h38YLFtzhgu%2BrR8hBfONaPlifKQHoc%2BchBKUj4BF9fcaGNPEjmD5OxsvxTkCv44twLljgroXqKcVOyPCVtmfr5GLpsD53Yc%2BJn5AVtt8QcJCbDq3ZL2q0tIJ6pMJ7Mi4xpTuZF7dK8mNc08cqeZej8FDW3TJq4rkgSrtHT0y2ToZD8C8IQ474RGVY7tWqoWpaWSYeVJFk%2BcV9N5NNubcWgfAifjsx6Fgmy2v5hH%2FBbdRFbO%2BggeVPVHeRyXcRIqupgFuIyhBTWdAuBMnc8P46uTRy7zYj4YlGfLBKaBl8BV7NTQOVDnq3NXiHmJap0q5Y0Qy0xB%2B%2BslmjiRu8n4HqRgLB21%2B3vglErs%2BnlqrtuCyqDlgE%2FBroKeCYXcyWEjau%2BHKi3Off3Qly%2FHODM2gCnCPhqqFAj2RpaUPa%2B1wKGLiqbSaulpfWUJm2W0hX58z5IKZbWz7RARiWNlcGXG92rLVfotyaOlg2z2jUSNbvFqrxGcmKimhUSXZRBNfJ6xX1E5RCSZZT4d4CQp%2F6pIaFbrIJ2lZ5esSZyheBs93mVCjDLOi9ShZDPTlR3pIo9nd5rbG49tcPLGNiZdxAuXKa4QoCKWzxue79x5mViVVLyH%2FpO7pdfqbUV%2FaKeLzy%2Fdr9EdS6XdXlSl9e1X4JVQ5zD6Zue7EVPtuOcFSlk%2B0QyBH%2FlcVQWJ43dUpH1oeQ1gatuqTA%2BatdQ5r3NejZHZFc9BBnl3K3pwkQ1Fy2GZL9TKwveqiz4tqU4GbHU9bsw5eAq8RsQP2ALVOb10JZ2ipEhLtImez6OG7vI1pAmbexKgqGgY9IGRh2vghv8mzZX2%2BRhtK%2FENCazqFneYf3Eu2WWdv28MeDKJjVdee%2ByRdSBZD3txI9A28tm9QiRGGRyxBm9LD48%2Fr2LJEkd%2F2qIPvkf%3C%2Fdiagram%3E%3C%2Fmxfile%3E)



### 2. User submission

**Goal**: create user submission

**API spec**:
    Method: POST

    Endpoint:  ~/score-service/v1/users/{{userId}}/actions

    Header: access-token is required

    Request payload:

    {
        actionId: string,
        data: any
    }
    
    Response payload: 

    {
        submissionId: string,
        actionId: string,
        data: any
        score: number
    }


**Sequence Diagram**: [ Please check it here ](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=user-submission.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%222YBvvXClWsGukQMizWep%22%3E7Vtbc9o4FP41zO4%2BhPEVw2O4tOm2mU1DO%2B3sy46wFezFWK4kc%2BmvXwlLvoOB2gnL8BLsY93s833nfEd2OvpouXmPQeg%2BIgf6HU1xNh193NE0VVH77IdbtrHFtJTYMMeeIxqlhqn3E8qewhp5DiS5hhQhn3ph3mijIIA2zdkAxmidb%2FaC%2FPysIZjDkmFqA79s%2FeY51I2tfVNJ7Q%2FQm7tyZlURV5ZANhYG4gIHrTMmfdLRRxghGh8tNyPo84cnn0vc792eq8nCMAzoMR3A4wBvV%2FpmZWnhD7T5PH5%2BmNyJUVbAj8QNf4Mz4lEo1ky38kGw5Yf8MFr6n7wX6HsBOxuGEHtLSCFmV3xhfkptw7XLxpqGwOZd1wwizObSpc%2FOVHbIvEYB68K7K%2BzcwSj8AvAcUmGwke%2BDkHiz3TK4BUM7wsRbwWdIYrRwK4oon3qUoIAbQ4QpsxCK2RzcCAGha0jY4TCA64nDPC1v0Bp2tN6PiDtjCJMLiamj32eu%2BzOU6Z020kaFRnsGWEFMPYaxPV3ZDa6gk%2Bur5BpgFAVOqYU13g1URIV0MZsTbjImgZL3EDFn4S1rIq9KxArKGuJ0neI%2FQbmbwb7VE0YgODdPhk5hyQ4EMk9AqVZCaQmeGVCFiHl7twRz2DHHBZQyTLhojgLgZ3FaiR%2B6Q%2BKUA5%2BUkX8DV11QORpxhpkDnFUFuDLejH5beNNLePtKGEw0ZRrNlh7lU9rUQ8EhFEo33PvePGC2GaIULdkFwmBF73lq4mhkc3B%2FBo60zHxkL2QzkQ%2F7OdwwqOUxIvGgjxPfJ34WQVP4ND47zY1UxuMadvIFHnQ2hj6gLHDnc3SF70TXJ87jFCR3PaUSJXIEgiJsQ9GpAIBkFedjwixhYmojDDkoIF559i1jXk1QOzl%2B6ReXMXu3jHmh4DoYXM7NmL0jM%2BagAbwthk%2FKBD5vvA8Pj9PFfDEJPqCKOkJGx%2FHwFhivBbsnB0ZTf8PAWAnUWylxqeA6GFfODYzViKsAXAN4e7QdcwBWEfyLjDbfZ2g0WoR3RgleB4V8XqinAPuEUCgw%2BS%2BkdCsKAxBRlA%2BDdZXAXlK3Ld9VK%2B8ZVT9Ov5cG0ns1A8Vca6IQqPRouRBQu0eUhvz5fgIz6Of9BUR56MOXLONk1bj0HCcGBk9RIM1d5chU9uwhQJYYlWyhikk62V3KKqYp3WRzV3hClM2%2FWudZRm7UO1XLD4FeXghsxbVaWTZ%2FBC8LwEy%2FcxcLSfM5ghH%2F%2FeOmbK4l%2BZycZ3r9N1Q2leDVb9LmUtF1ONicq210UztK2zSxTVqdSm7iZo%2B40cwzxU3tQM2Jm4%2BrP%2BHfE%2FMfEH6d22Pw8OXD97Xc%2Bb4wjxbcV%2BHixj2qFxyhK2d61KwbqGWPSr2XZgVjJ1dprGUIl62E7BQrm0CJQgfwt79KRCD%2BjfAWseo5Tc7azD27lPHLgvZooZpHxX507w2vd0pXSlgpPbVGFG1BJrcjaCtv2LwwOjuAuLsT9S25XaKkUXDI0aVo3UAtc7tcrpjd3eOhEQ52ByTy6XVw1zzIXaVrqY1wVe8VuFqI1u1xVX0jrroIez95iXm5yVctFk3nElQtauE9BL3HGGwzzQTA9y7YUJXKBacQiUdsFDDlek%2Fj7B%2B50F7wtUfUZX5iBI73oxQQOMLMPS6tHv8TM3sNriXRH66jlK6i64VM30z0UBW1ICAKQ7QXPqwLS%2FXHBo%2F8ByYHdjZajzKG3EFp%2FouSSo%2F1S%2Fztcf4%2BYeREdpUEV2wXBHN%2BAFcwuJK8bh2kKtPk%2BsDIc7UZUT4o8F9%2FLaIOLoyol6HJLa1ARvM4MtazujhQQynfNJXKeVpN%2BVJmZGKGxWPGs1T8YRI8RIhIaoAeWPL3CsGMhImf%2F%2B%2BxY1CT5nsD1WgkWPQKaf0Vq4K3KgsuO1wUXwKbxrkbrr1Bt2aolot4uRuU4XQ%2Fx%2BnsFt1V01mtk%2B2WMWiGz1a%2Byn9FOpc%2FLb8n28AuOTDzJvkdBkvukprXxDsPQTzhcZ%2FkRHiFj45gqOigDfJ5TrcEXjNvncyq106l7zLOee9U%2FRD7bxQTL3KrJO%2BehG2n66bCQEeGwZO3ShSzcsHt6qZBiXa6qLVsSHiJNYuIF8SHPpp79pVG2H5NhG1rY6QooBqotthp%2Bs%2BTcfP0X1D1yX8%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)


### 3. Get Top 10 Score (Board)

**Goal**: Get top user's score

**API spec**:
    Method: GET

    Endpoint:  ~/score-service/v1/board

    Header: access-token is required
    
    Response payload: 

    [{
        userId: string,
        user?: any, // user information if needed
        rank: number
        score: number
    }]


### 4. Board change event via topic subscription

**Goal**: receive the board change realtime

**API spec**:
    Method: Socket

    Endpoint:  via socket / firebase realtime database

    Auth: access-token is required
    
    Payload: 

    [{
        userId: string,
        user?: any, // user information if needed
        rank: number
        score: number
    }]


### 5. Security

1. Always use the https, ssl to encript data between server and client.

2. Authentication and Authorization: make sure the access token (jwt) is valid. user's role, scope is correct.

3. Rate limit: should be apply the rate limit by userId, Ip, action, ...

