import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


class Home extends Component {
    componentDidMount() {
        if (this.props.state) {
            this.props.switch()
        }

    }


    render() {
        return (
            <div className='Home-container'>
                <section className='Home-intro' id='intro'>
                    <div className='Home-intro-header'>
                        <h3>5 Card Sabacc</h3>
                        <h1>A spin on the Corellian spike variation of the game.</h1>
                        <p>
                            5 Card Sabacc is a variation on the base Corellian Spike version of the game.
                            This variation tries to bring a more competitive flavor to the experience, similar
                            to that of poker.
                        </p>
                    </div>

                </section>
                <section className='Home-goal' id='goal'>
                    <h2>Why change the game?</h2>
                    <div className='Home-goal-content-wrapper'>
                        <div className='Home-goal-section-one'>
                            <div className='Home-img-wrapper'>
                                <div className='Home-img-container'>
                                    <img src={`${process.env.PUBLIC_URL}/Images/disney_world.jpeg`}
                                        alt='My girlfriend and I at Star Wars: Galaxies Edge.'
                                        className='Home-img-disney_world' />
                                </div>
                                <p className='Home-img-subtext'>My girlfriend and I at Star Wars: Galaxies Edge.</p>
                            </div>
                            <div className='Home-goal-section-one-content'>
                                <p className='content-one'>
                                    Recently I was fortunate enough to vacation at Walt Disney World and visit
                                    Star Wars: Galaxy's Edge. During my travels to a galaxy far far away, I came
                                    across what I like to call Star Wars Poker or <span>Sabacc</span>. If you are unfamiliar with
                                    <span> Sabacc</span>, as was I at the time of purchase, I will do my best to give you a quick
                                    run down.
                                </p>
                                <p className='content-two'>
                                    A <span>Sabacc</span> deck consists of 62 cards with 3 different suits; triangles, squares,
                                    and circles. Each suit has a run of numbers +1 through +10 (green cards) and -1
                                    through -10 (red cards). Two zero cards (<span>sylops</span>) are included as well. In order
                                    to win a game of <span>Sabacc</span> you want to have cards that sum to 0 or as close to 0
                                    as possible. Players that are tied for 0 must compare their hands to the <span>winning hands </span>
                                    chart, similar to poker, to see who wins.
                                </p>

                            </div>

                        </div>
                        <div className='Home-goal-section-two'>
                            <div className='Home-img-wrapper img-sabacc-deck'>
                                <div className='Home-img-container'>
                                    <img src={`${process.env.PUBLIC_URL}/Images/DSC04275.JPG`}
                                        alt='Sabacc deck.'
                                        className='Home-img-sabacc_deck'></img>
                                </div>
                                <p className='Home-img-subtext'>Sabacc Deck from Star Wars: Galaxy's Edge</p>
                            </div>
                            <div className='goal-section-two'>
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
                                <p>
                                    With all that being said. I would like to introduce my variation to the game, which
                                    I have dubbed <span> 5 Card Sabacc</span>. Please continue to the rules page to learn
                                    more about the variation.
                                </p>
                            </div>
                        </div>
                        {/* <div className='Home-goal-section-three'>
                            <p></p>
                            <img></img>
                        </div> */}
                    </div>
                </section>
                <section className='Home-rules' id='rules'>
                    <h2>Rules - <span className='Home-rules-h1-span'> 5 Card Sabacc</span></h2>
                    <div className='Home-rules-content-wrapper'>

                        <div className='Home-img-wrapper rules-img'>
                            <div className='Home-img-container'>
                                <img src={`${process.env.PUBLIC_URL}/Images/DSC04276.JPG`}
                                    alt='Sabacc cards.'
                                    className='Home-img-sabacc_cards' />
                            </div>
                            <p className='Home-img-subtext'>Sabacc Cards</p>
                        </div>
                        <div className='objective-content'>
                            <h3>
                                Objective
                            </h3>
                            <p>
                                The object of the game is to have a hand that sums to <span>zero </span>
                                or as close to <span>zero</span> as possible with the best winning hand.
                            </p>
                            <h3>
                                Setup
                            </h3>
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

                        <div className='mechanics-content'>
                            <h3>
                                Game Mechanics
                            </h3>
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

                            <h3>
                                Player Mechanics
                            </h3>
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

                        <div className='gameplay-content'>
                            <h3>
                                Gameplay
                            </h3>
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
                <section className='Home-hands' id='winningHands'>
                    <div className='Home-hands-container'>
                        <div className='Home-hands-notes-container'>
                            <h2 className='Home-hands-notes-header'>Winning Hands</h2>

                            <div className='Home-hands-notes-content'>
                                <h3>Preface</h3>
                                <p>
                                    As a preface to the winning hands list; in the orginial Corellian Spike version
                                    of the game players can end the game with 2 to 5 cards in their hand. I updated
                                    the rules to force players to have 5 cards at the end of the game for two reasons:
                                </p>
                                <ol>
                                    <li>Having players with mismatching hands feels a bit sloppy. In most cases it felt
                                        like players would hold onto as little cards as possible because drawing a card
                                        could drastically change your hand.
                                    </li>
                                    <li>
                                        Trying to calculate the probability of hands with variations from 2 to 5 cards while
                                        including player choice into the decision is difficult. As I thought and found out by reading
                                        Davie Murray's <a href='http://www.daviemurray.com/Sabacc/Sabacc_hand_hierarchy.html'>Hand Hierachy </a>
                                        explanation, the original games hand hierachy does not exactly correlate to hand probability/likelihood.
                                    </li>
                                </ol>
                                <p>
                                    Because of the change in hand size, I had to adapt the winning hands list and figure out
                                    the probabilities of the new possibilites. I created a <Link to='/Probability-calculator'>probability calculator</Link> to help decide
                                    the order of winning hands you see on this page. If you would like to test out the calculator, there
                                    is a button <span>below</span>.
                                </p>
                                <h3>Winning Hand Ties</h3>
                                <p>If two people have hands that tie follow the chart below starting at 1.</p>
                                <ol>
                                    <li>
                                        Nulrhek Tie
                                        <ol>
                                            <li>Hand with <span>sylop </span> wins.</li>
                                            <li>Positive number beats negative number. (Ex. 6 beats -6)</li>
                                            <li>Highest total positive sum of numbers. (Ex. positive total of hand [1,4,-2,-5,6] would be 1 + 4 + 6 = 11)</li>
                                            <li>Highest single positive number. (Ex. hand of [1,4,-2,-5,6] highest single positive number is 6)</li>
                                            <li>If there is still a tie, then the pot is split</li>
                                        </ol>
                                    </li>
                                    <li>
                                        Sabacc Tie
                                        <ol>
                                            <li>Suited hands beat non suited hands.</li>
                                            <li>Higher integer pairs, three of a kind, and four of a kind beat lower integer.</li>
                                        </ol>
                                    </li>
                                </ol>

                            </div>
                        </div>
                        <div className='Home-hands-winningHands-container'>
                            <div className='Home-hands-winningHands-rank-wrapper winning-hand'>
                                <ol>
                                    <li>
                                        <div>
                                            <h3>1. Rhylet</h3>
                                            <p>Sabacc with three of a kind and a pair.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_02.png`}
                                                alt='Negative triangle 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_cir_02.png`}
                                                alt='Negative circle 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_sqr_02.png`}
                                                alt='Negative square 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_03.png`}
                                                alt='Positive square 3 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_cir_03.png`}
                                                alt='Positive circle 3 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>2. Fleet/Squadron</h3>
                                            <p>Sabacc with one sylop and four of a kind.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_sylop_01.png`}
                                                alt='Sylop or 0 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_10.png`}
                                                alt='Negative triangle 10 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_cir_10.png`}
                                                alt='Positive circle 10 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_cir_10.png`}
                                                alt='Negative circle 10 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_10.png`}
                                                alt='Positive square 10 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>3. Gee Whiz</h3>
                                            <p>Sabacc with 1,2,3,4,-10 or vice versa.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_01.png`}
                                                alt='Negative triangle 1 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_02.png`}
                                                alt='Negative triangle 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_03.png`}
                                                alt='Negative triangle 3 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_04.png`}
                                                alt='Negative triangle 4 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_cir_10.png`}
                                                alt='Positive circle 10 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>4. Pure Sabacc</h3>
                                            <p>Sabacc with two sylops.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_sylop_01.png`}
                                                alt='Sylop or 0 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_sylop_01.png`}
                                                alt='Sylop or 0 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_02.png`}
                                                alt='Negative triangle 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_sqr_02.png`}
                                                alt='Negative square 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_cir_04.png`}
                                                alt='Positive circle 4 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>5. Straight Khyron</h3>
                                            <p>Sabacc with one sylop and a run of numbers.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_sylop_01.png`}
                                                alt='Sylop or 0 card..'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_07.png`}
                                                alt='Negative triangle 7 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_08.png`}
                                                alt='Positive square 8 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_09.png`}
                                                alt='Positive square 9 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_10.png`}
                                                alt='Negative triangle 10 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>6. Banthas Wild</h3>
                                            <p>Sabacc with a three of a kind.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_02.png`}
                                                alt='Negative triangle 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_cir_02.png`}
                                                alt='Negative circle 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_sqr_02.png`}
                                                alt='Negative square 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_01.png`}
                                                alt='Positive square 1 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_cir_04.png`}
                                                alt='Positive circle 4 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>7. Rule of Two</h3>
                                            <p>Sabacc with two pairs.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_sylop_01.png`}
                                                alt='Sylop or 0 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_03.png`}
                                                alt='Negative triangle 3 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_03.png`}
                                                alt='Positive square 3 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_02.png`}
                                                alt='Positive square 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_cir_02.png`}
                                                alt='Negative circle 2 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>8. Twins</h3>
                                            <p>Sabacc with one pair.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_03.png`}
                                                alt='Negative triangle 3 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_03.png`}
                                                alt='Positive square 3 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_04.png`}
                                                alt='Positive square 4 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_06.png`}
                                                alt='Positive square 6 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_10.png`}
                                                alt='Negative triangle 10 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>9. Sabacc</h3>
                                            <p>Sum of hand equals zero.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_05.png`}
                                                alt='Positive square 5 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_07.png`}
                                                alt='Positive square 7 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_01.png`}
                                                alt='Negative triangle 1 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_02.png`}
                                                alt='Negative triangle 2 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_10.png`}
                                                alt='Negative triangle 10 card.'></img>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>10. Nulrhek</h3>
                                            <p>Sum of hand does not equal zero.</p>
                                        </div>
                                        <div className='Hand-img-container'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_04.png`}
                                                alt='Positive square 4 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_02.png`}
                                                alt='Positive square 7 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_05.png`}
                                                alt='Positive square 5 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_pos_sqr_06.png`}
                                                alt='Positive square 6 card.'></img>
                                            <img src={`${process.env.PUBLIC_URL}/Images/sabacc_neg_tri_10.png`}
                                                alt='Negative triangle 10 card.'></img>
                                        </div>
                                    </li>

                                </ol>

                            </div>
                            <Link to='/Probability-calculator'>
                                <div className='calc-btn'>Probability Calculator</div>
                            </Link>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Home;