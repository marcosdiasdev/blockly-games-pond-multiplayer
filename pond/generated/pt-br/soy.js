// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Busque inimigos. Especifique uma dire\u00E7\u00E3o(0-360). \\nRetorna a distancia do inimigo mais proximo \\nnaquela dire\u00E7\u00E3o. Retorna infinito se nenhum \\ninimigo for encontrado. </span><span id="Pond_cannonTooltip">Dispare o canh\u00E3o. Especifique uma dire\u00E7\u00E3o \\n(0-360) e o alcance (0-70). </span><span id="Pond_swimTooltip">Nadar para a frente. Especifique uma dire\u00E7\u00E3o \\n(0-360). </span><span id="Pond_stopTooltip">Parar de nadar. O jogador fara uma parada lenta. </span><span id="Pond_healthTooltip">Retorna a saude atual do jogador (0 esta morto, \\n100 esta saud\u00E1vel). </span><span id="Pond_speedTooltip">Retorna a velocidade atual do jogador (0 esta \\npar\u00E1do, 100 esta na velocidade maxima) </span><span id="Pond_locXTooltip">Retorna a coordenada X do jogador (0 \u00E9 a margem \\nesquerda, 100 \u00E9 a margem direita). </span><span id="Pond_locYTooltip">Retorna a coordenada Y do jogador (0 \u00E9 a borda \\ninferior, 100 \u00E9 a borda superior). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Mostrar a documenta\u00E7\u00E3o de idioma.">Documenta\u00E7\u00E3o</button></td><td><button id="runButton" class="primary" title="Rodar o programa que voc\u00EA escreveu."><img src="common/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Parar a execu\u00E7\u00E3o do programa e resetar o nivel."><img src="common/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
