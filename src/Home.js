import React, { Component } from 'react';
import './Home.css'

class Home extends Component {


    render() {
        return (
            <div className='Home-container'>
                <section className='Home-intro' id='intro'>
                    <div className='Home-intro-header'>
                        <h2>5 Card Sabacc</h2>
                        <h1>A spin on the Corellian spike variation of the game.</h1>
                    </div>
                    <div className='Home-intro-content'>
                        <p>
                            5 Card Sabacc is a variation on the base Corellian Spike version of the game.
                            This variation tries to bring a more competitive flavor to the experience, similar
                            to that of poker.
                        </p>
                    </div>
                </section>
                <section className='Home-goal' id='goal'>
                    <h1>Why change the game?</h1>
                    <div className='Home-goal-content-wrapper'>
                        <div className='Home-goal-section-one'>

                            <p>
                                Recently I was fortunate enough to vacation at Walt Disney World and visit
                                Star Wars: Galaxy's Edge. During my travels to a galaxy far far away, I came
                                across what I like to call Star Wars Poker or <span>Sabacc</span>. If you are unfamiliar with
                                <span> Sabacc</span>, as was I at the time of purchase, I will do my best to give you a quick
                                run down.
                            </p>
                            <div className='Home-img-wrapper'>
                                <div className='Home-img-container'>
                                    <img src={`${process.env.PUBLIC_URL}/Images/disney_world.jpeg`}
                                        alt='My girlfriend and I at Star Wars: Galaxies Edge.'
                                        className='Home-img-disney_world' />
                                </div>
                                <p className='Home-img-subtext'>My girlfriend and I at Star Wars: Galaxies Edge.</p>
                            </div>
                            <p>
                                A <span>Sabacc</span> deck consists of 62 cards with 3 different suits; triangles, squares,
                                and circles. Each suit has a run of numbers +1 through +10 (green cards) and -1
                                through -10 (red cards). Two zero cards (<span>sylops</span>) are included as well. In order
                                to win a game of <span>Sabacc</span> you want to have cards that sum to 0 or as close to 0
                                as possible. Players that are tied for 0 must compare their hands to the <span>winning hands </span>
                                chart, similar to poker, to see who wins.
                            </p>
                        </div>
                        <div className='Home-goal-section-two'>
                            <p>
                                At first the game rules can seem a bit complicated, and memorizing the different
                                <span> winning hands</span> is no easy task. However, once you get to playing the game, it is
                                a blast. My girlfriend and I played a couple games right before our flight back home. From that
                                moment we were hooked, and we would play here and there whenever we had the chance.
                            </p>
                            <p>
                                I wanted to play <span> Sabacc</span> for real money as the Characters from Star Wars
                                did. However, the more I played the more I realized the base game's rules were not
                                condusive for a poker like environment. The <span> winning hand</span> order didn't make sense, the
                                rule to discard your hand when the dice matched caused the game to rely more on luck than
                                strategy.
                            </p>
                            <div className='Home-img-wrapper'>
                                <div className='Home-img-container'>
                                    <img src={`${process.env.PUBLIC_URL}/Images/DSC04275.jpg`}
                                        alt='Sabacc deck.'
                                        className='Home-img-sabacc_deck'></img>
                                </div>
                                <p className='Home-img-subtext'>Sabacc Deck from Star Wars: Galaxy's Edge</p>
                            </div>
                            <p>
                                With all that being said. I would like to introduce my variation to the game, which
                                I have dubbed <span> 5 Card Sabacc</span>. Please continue to the rules page to learn
                                more about the variation.
                            </p>
                        </div>
                        {/* <div className='Home-goal-section-three'>
                            <p></p>
                            <img></img>
                        </div> */}
                    </div>
                </section>
                <section className='Home-rules' id='rules'>
                    <h1>Rules - <span className='Home-rules-h1-span'> 5 Card Sabacc</span></h1>
                    <div className='Home-rules-content-wrapper'>
                        <div className='Home-rules-section-one'>
                            <h2>
                                Objective
                            </h2>
                            <p>
                                The object of the game is to have a hand that sums to <span>zero </span>
                                or as close to <span>zero</span> as possible with the best winning hand.
                            </p>
                            <h2>
                                Setup
                            </h2>
                            <p>
                                Choose someone to be the dealer. The person to the left of the
                                dealer is the little blind, and the person to the left of the
                                little blind is the big blind. Roles will shift each game to the left
                            </p>
                            <ol>
                                <li>
                                    Dealer shuffles the <span>deck</span> and deals two cards facedown to each player
                                    starting with the person on the left. Players should look at their cards
                                    and not show them to other players.
                                </li>
                                <li>
                                    Dealer places the shuffled deck in the middle of the table and flips
                                    the top card and places it next to the deck face up. This becomes the
                                    <span> discard pile</span>.
                                </li>
                                <li>
                                    Determine the initial bets for the little blind and big blind. little
                                    blind antes bet and puts one credit into the <span> Sabacc pot</span>.
                                </li>
                                <li>
                                    Big blind antes bet and puts one credit into the <span> Sabacc pot</span>.
                                </li>
                            </ol>
                        </div>
                        <div className='Home-rules-section-two'>

                            <h2>
                                Game Mechanics
                            </h2>
                            <p>
                                <span>Dice roll</span> - Dice will be rolled at the end of the round
                                after every player has taken their turn. If the dice do no match when
                                rolled, nothing happens. If the dice match when rolled, all players must choose
                                one of their cards to trade with a player next to them. The round determines which
                                player to trade with:
                            </p>
                            <ul>
                                <li><span>Round 1</span> - players to the left.</li>
                                <li><span>Round 2</span> - players to the right.</li>
                                <li><span>Round 3</span> - players to the left.</li>
                            </ul>
                            <div className='Home-img-wrapper rules-img'>
                                <div className='Home-img-container'>
                                    <img src={`${process.env.PUBLIC_URL}/Images/DSC04276.jpg`}
                                        alt='Sabacc cards.'
                                        className='Home-img-sabacc_cards' />
                                </div>
                                <p className='Home-img-subtext'>Sabacc Cards</p>
                            </div>
                            <h2>
                                Player Mechanics
                            </h2>
                            <p>
                                During a players turn, they have a choice to take one of three actions:
                            </p>
                            <ol>
                                <li>
                                    Trade - The player can trade one card in her hand for the top card of the
                                    <span> discard pile</span>.
                                </li>
                                <li>
                                    Discard - The player can discard one card in his hand to draw the top card
                                    of the <span>deck</span>. At the end of the players turn, he should have the same amount of cards
                                    he had prior to the discard.
                                </li>
                                <li>
                                    Stand - The player can choose to take no action if she is comfortable with her
                                    current hand of cards.
                                </li>
                            </ol>
                        </div>
                        <div className='Home-rules-section-three'>
                            <h2>
                                Gameplay
                            </h2>
                            <p>
                                One game of <span>Sabacc</span> consists of <span>three</span> rounds. The player to left of the dealer starts the
                                round and play continues in a clockwise manner. Each player <span>must draw one card</span> at the start
                                of their turn. Every player should have a <span>5 card hand</span> at the end of the game. Once the player whose turn
                                it is has drawn a card, they can choose one action as described in <span> Player Mechanics </span>section. Each round
                                should proceed as follows:
                            </p>
                            <ol>
                                <li>
                                    Players take their turn in clockwise order ending with the dealers turn.
                                </li>
                                <li>
                                    Dealer <span>rolls the dice</span>. If dice symbols are the same, players trader with
                                    each other.
                                </li>
                                <li>
                                    Betting starts with the player to the left of the dealer. Betting rules can be choosen
                                    by the house. By default, standard betting actions apply:
                                    <ul>
                                        <li>
                                            Check
                                        </li>
                                        <li>
                                            Raise
                                        </li>
                                        <li>
                                            Fold
                                        </li>
                                    </ul>
                                </li>
                                <p>
                                    Once the third round has concluded, players reveal their hands starting with the player to
                                    the left of the dealer. For the order of <span>Sabacc</span> winning hands please see the <span className='Home-rule-next'> next </span>
                                    page.
                                </p>
                            </ol>
                        </div>
                    </div>


                </section>

            </div>
        );
    }
}

export default Home;